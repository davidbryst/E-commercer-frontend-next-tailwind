import type { NextPage } from 'next';
import Icons from '../../components/Icons';
import PreviewImage from '../../components/PreviewImage';
import BaseLayout from '../../layouts/BaseLayout';

const OneArticle: NextPage = ({}) => {
    return (
        <div>
            <BaseLayout>
                <div className="flex w-auto">
                    <div className="relative">
                        <div><Icons /></div>
                        <img src="/images/meuble3.png" className="" alt="image" />
                        <div className = "flex">
                            <PreviewImage />
                            <PreviewImage />
                        </div>
                    </div>
                    <div>
                        <div className = "">
                            <button className = "p-2 bg-blue text-white text-sm font-bold rounded">Commander</button>
                            
                        </div>
                    </div>
                    
                </div>
            </BaseLayout>
        </div>
    );
};

export default OneArticle;
