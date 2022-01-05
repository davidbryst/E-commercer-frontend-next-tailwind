import { HiChevronDown } from "react-icons/hi";
import {useState} from "react"
import Offer from "../components/Offer";

const BestOfferBar = () => {

    
    const [dropdownIsActive, setDropdownIsActive] = useState(false);

    return (
        <div className="relative px-8 mb-4">
            <style jsx>{`
                .x-scrollable::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            <div
                className="flex items-center justify-start w-max cursor-pointer"
                onClick={(e) => {
                    e.stopPropagation();
                    setDropdownIsActive(!dropdownIsActive);
                }}
            >
                <div className="text-sm text-granite"> Nos meilleurs offres </div>
                <HiChevronDown
                    className={`ml-2 w-4 h-4 transition-transform ${
                        dropdownIsActive && 'transform rotate-180'
                    }`}
                />
            </div>
            <div
                className={`${
                    dropdownIsActive ? '' : 'hidden'
                } x-scrollable overflow-x-auto flex py-2`}
            >
                <Offer name="Table de chevet" image={'images/meuble1.png'} />
                <Offer name="Tirroir d'habits" image={'images/meuble3.png'} />
                <Offer name="Table de chevet" image={'images/meuble4.png'} />
                <Offer name="Canapé en cuir" image={'images/meuble3.png'} />
                <Offer name="Table Solide" image={'images/meuble3.png'} />
                <Offer name="Tirroir d'habits" image={'images/meuble3.png'} />
                <Offer name="Table de chevet" image={'images/meuble4.png'} />
                <Offer name="Canapé en cuir" image={'images/meuble4.png'} />
                <Offer name="Table Solide" image={'images/meuble3.png'} />
            </div>
        </div>
    );
};

export default BestOfferBar;
