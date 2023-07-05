'use client';
import getClient from "@/utils/connection";
import {useEffect, useState} from "react";
import {PortableText} from "@portabletext/react";
import SanityImage from "@/components/helper/SanityImage";

const component = {
    block: ({children}) => <p className="my-4 text-gray-200">{children}</p>,
    marks: {
        link: ({children, value}) => (
            <a href={value.href} className="text-blue-500 cursor-pointer hover:underline" target="_blank">
                {children}
            </a>
        ),

    },
    types: {
        image: ({value}) => {
            return (
                <SanityImage {...value} />
            );
        },
    },
}

export default function BlogPost({params}) {
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const post = await getClient().fetch('*[_type == "post" && slug.current == "'+params.slug+'"] {\n' +
                    '  _id,\n' +
                    '  title,\n' +
                    '  slug,\n' +
                    '  author,\n' +
                    '  category,\n' +
                    '  content,\n' +
                    '  thumbnail {\n' +
                    '    asset-> {\n' +
                    '      url\n' +
                    '    }\n' +
                    '  }\n' +
                    '}');
                console.log(post);
                setPost(post[0]);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);


    if (post) {
    return (
        <div className="container mx-auto text-light">
            <h1 className="text-4xl font-bold text-center my-4 dark:text-primary-light">{post.title}</h1>
            <div className="flex justify-center">
                {/*<img className="w-1/2" src={post.imageUrl}/>*/}
            </div>
            <div className="text-center my-4">
                <span className="font-bold">Written by {post.author.name}</span>
            </div>
            <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed text-primary-light">
                <PortableText value={post.content} components={component} />
            </div>
        </div>
    )
    } else {
        return <div>Loading...</div>
    }
}

