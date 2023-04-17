import { Virtuoso } from 'react-virtuoso'
import parse from 'html-react-parser';
import ContentLoader from 'react-content-loader';

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
        fallback: "blocking",
    };
}

export const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
};

export async function getStaticProps({ params }) {
    const postData = await fetch(`https://riyaz.herokuapp.com/get`)
        .then(res => res.json())
        .then(json => json.data)
    const currentPage = 1;
    const pageSize = 10;
    const paginatedData = paginate(postData, currentPage, pageSize);
    return {
        props: {
            data: paginatedData,
            currentPage,
            pageSize,
        },
    };
}

export default function Section({ data }) {

    if (!data) {
        return <ContentLoader />
    }
    return (
        <div className="flex flex-col gap-4">
            <Virtuoso style={{ height: "100vh" }} totalCount={data.length} itemContent={
                (index) => {
                    const row = data[index];
                    return (
                        <div key={index} className="bg-main bg-opacity-10 font-medium rounded w-2/3 px-8 py-4 mb-8 mx-auto border-2 border-main flex flex-col items-center justify-center gap-4">
                            <p className="font-extrabold underline underline-offset-4 text-xl text-main">{row.title}</p>
                            <p className='text-xl rounded py-4 px-4 bg-main text-black bg-opacity-10'>{row.arabic}</p>
                            <hr className=' border border-main w-full' />
                            <div className='text-base'>{parse(row.turkish)}</div>
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