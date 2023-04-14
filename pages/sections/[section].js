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


function getPostData(section) {
    if (section === "hadis") {
        return {
            name: "hadis"
        }
    } else if (section === "tefsir") {
        return {
            name: "tefsir"
        }
    } else if (section === "meal") {
        return {
            name: "meal"
        }
    }
}
export async function getStaticProps({ params }) {
    const postData = getPostData(params.section);
    return {
        props: {
            postData
        }
    };
}

export default function Section({ postData }) {
    return (
        <div>
            Hello section! It is {postData.name}.
        </div>
    );
}