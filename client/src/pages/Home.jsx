import { useState, useEffect } from 'react';
import { Card, FormField } from '../components';

const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
        return data.map((post) => <Card key={post._id} {...post} />);
    };

    return (
        <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>{title}</h2>
    )
};

const Home = () => {
    const [allPosts, setAllPosts] = useState(null);
    const [searchText, setSearchText] = useState('');

    return (
        <section className='max-w-7xl mx-auto'>
            <div>
                <h1 className='font-extrabold text-[#33328] text-[32px]'>The Community Showcase</h1>
                <p className='mt-2 text-[#666e75] text-[14px] max-w[500px]'>Browse through a collection of imaginative and visually stunning generated by DALL-E AI</p>
            </div>
            <div className='mt-16'>
                <FormField />
            </div>
            <div>
                {searchText ? (
                    <RenderCards
                        data={[]}
                        title="No search results found"
                    />
                ) : (
                    <RenderCards
                        data={[]}
                        title="No posts found"
                    />
                )}
            </div>
        </section>
    )
};

export default Home;