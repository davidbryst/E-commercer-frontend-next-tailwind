import { NextPage } from 'next';
import AppLayout from '../../layouts/AppLayout';
import ArticleItem from '../../components/ArticleItem';
import BestOfferBar from '../../groups/BestOfferBar';
import ArticleList from '../../groups/ArticleList';

const Articles: NextPage = () => {
    return (
        <AppLayout>
            <BestOfferBar />
            <div className="relative h-auto flex justify-center px-8 pt-8 border-t border-seashell">
                <div className="sticky top-32 left-0 h-96 w-1/5 pr-16">
                    {/* <div className="text-granite text-lg font-semibold mb-4">
                        Filtrer
                    </div> */}

                    <div className="mb-7">
                        <div className="mb-3 font-semibold text-granite">
                            Trier par
                        </div>
                        <div>
                            <div className="mb-1">
                                <input
                                    type="radio"
                                    id="recent"
                                    name="sort"
                                    className="mr-2"
                                />
                                <label htmlFor="recent">Les plus récent</label>
                            </div>
                            <div className="mb-1">
                                <input
                                    type="radio"
                                    id="expensive"
                                    name="sort"
                                    className="mr-2"
                                />
                                <label htmlFor="expensive">Les plus cher</label>
                            </div>
                            <div className="mb-1">
                                <input
                                    type="radio"
                                    id="popular"
                                    name="sort"
                                    className="mr-2"
                                />
                                <label htmlFor="popular">
                                    Les plus populaire
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="mb-3 font-semibold text-granite">
                            Prix
                        </div>
                        <div className="flex justify-between mb-4">
                            <input
                                type="text"
                                placeholder="Min"
                                className="bg-snowdrift rounded w-20 h-11 text-center border border-seashell"
                            />
                            <input
                                type="text"
                                placeholder="Max"
                                className="bg-snowdrift rounded w-20 h-11 text-center border border-seashell"
                            />
                        </div>
                        <button className="px-3.5 text-sm py-3 font-semibold bg-blue text-white rounded">
                            Valider
                        </button>
                    </div>
                </div>
                <ArticleList />
            </div>
        </AppLayout>
    );
};

export default Articles;
