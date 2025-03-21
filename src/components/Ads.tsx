import Image from "next/image"
import car from "../../public/adsCar.png"


export default function Ads() {
    return (
        <section className="custom-container pb-8 flex items-center justify-between">
            <div className="bg-[url('/AdsOneBg.jpg')] bg-no-repeat rounded-[10px] p-6 pr-0 w-full">
                <h1 className="text-[32px] text-white font-semibold">The Best Platform <br /> for Car Rental</h1>
                <p className="text-[16px] text-white mt-4 mb-6">Ease of doing a car rental safely and <br /> reliably. Of course at a low price.</p>
                <button className="blue-button">Rental Car</button>
                <div className="flex justify-center w-full"><Image src={car} alt="" width="326" height="116"/></div>
            </div>

            
            <div className="bg-[url('/AdsOneBg.jpg')] bg-no-repeat rounded-[10px] p-6 pr-0 w-full">
                <h1 className="text-[32px] text-white font-semibold">The Best Platform <br /> for Car Rental</h1>
                <p className="text-[16px] text-white mt-4 mb-6">Ease of doing a car rental safely and <br /> reliably. Of course at a low price.</p>
                <button className="blue-button">Rental Car</button>
                <div className="flex justify-center w-full"><Image src={car} alt="" width="326" height="116"/></div>
            </div>
        </section >
    );
}
