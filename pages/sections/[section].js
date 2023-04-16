import ReactHtmlParser from 'react-html-parser';
import Card from '@/components/card';
import { Virtuoso } from 'react-virtuoso'

export async function getStaticPaths() {
    const paths = [
        {
            params: {
                section: 'hadis'
            }
        },
        {
            params: {
                section: 'tefsir'
            }
        },
        {
            params: {
                section: 'meal'
            }
        }
    ];
    return {
        paths,
        fallback: false,
    };
}


export async function getStaticProps({ params }) {
    const postData = await fetch(`https://riyaz.herokuapp.com/get`)
        .then(res => res.json())
        .then(json => json.data)
    return {
        props: {
            postData
        }
    };
}

export default function Section({ postData }) {



    return (
        <div className="flex flex-col gap-4">
            {/* {JSON.stringify(postData, null, 2)} */}
            <Virtuoso style={{ height: "100vh" }} totalCount={postData.length} itemContent={
                (index) => {
                    const row = postData[index];
                    return (
                        <div key={index} className="bg-main bg-opacity-10 text-main font-medium rounded w-2/3 px-8 py-4 mb-8 mx-auto border-2 border-main flex flex-col items-center justify-center gap-4">
                            <p className="font-extrabold underline underline-offset-4 text-xl">{row.title}</p>
                            <p className='text-xl rounded py-4 px-4 bg-main text-black bg-opacity-10'>{row.arabic}</p>
                            <hr className=' border border-main w-full' />
                            <div className='text-base '>{ReactHtmlParser(row.turkish)}</div>
                        </div>
                    )
                }
            } />
            {/* {postData.map((post, index) => (
                <div key={index} className="bg-main bg-opacity-10 text-main font-medium rounded w-2/3 px-8 py-4 mx-auto border-2 border-main flex flex-col items-center justify-center gap-4">
                    <p className=" font-extrabold underline underline-offset-4 text-xl">{post.title}</p>
                    <p className='text-base bg-main text-main text-opacity-10'>{post.arabic}</p>
                    <hr className=' border border-main w-full' />
                    <div className='text-base '>{ReactHtmlParser(post.turkish)}</div>
                </div>
            ))} */}
        </div>
    );
}