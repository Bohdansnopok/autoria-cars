import Image from "next/image"
import car from "../../public/car.png"
import heartRed from "../../public/heart-red.svg"
import heartDefault from "../../public/heart-default.svg"
import gasStation from "../../public/gas-station.svg"
import shines from "../../public/shines.svg"
import profileTwoUsers from "../../public/profile-2user.svg"

export default function MainCarsList() {
    return (
        <section className="custom-container pt-8 pb-16">

            <div>
                <div className="pb-8">
                    <div className="flex items-center justify-between w-full mb-5 py-[10px] px-[20px]">
                        <h6 className="text-[16px] text-[#90A3BF]">
                            Popular Car
                        </h6>
                        <a href="#" className="block text-[16px] font-semibold text-[#3563E9]">
                            View All
                        </a>
                    </div>

                    <div className="grid grid-cols-4 gap-8">
                        <div className="flex flex-col items-center p-6 bg-white rounded-[10px]">
                            <div className="flex items-start justify-between w-full">
                                <div>
                                    <div className="font-bold text-[20px] mb-1">Koenigsegg</div>
                                    <p className="text-[#90A3BF] font-bold">Sport</p>
                                </div>

                                <Image src={heartRed} alt="" />
                            </div>

                            <Image src={car} alt="" className="my-16" />

                            <div className="flex items-center justify-between w-full mb-6">
                                <div className="flex items-center gap-2">
                                    <Image src={gasStation} alt="" />
                                    <span className="block text-[#90A3BF]">90L</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={shines} alt="" />
                                    <span className="block text-[#90A3BF]">Manual</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={profileTwoUsers} alt="" />
                                    <span className="block text-[#90A3BF]">2 People</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center text-[26px] font-bold">$99.00/<span className="block text-[16px] text-[#90A3BF]">day</span></div>
                                <button className="blue-button">Rent Now</button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-white rounded-[10px]">
                            <div className="flex items-start justify-between w-full">
                                <div>
                                    <div className="font-bold text-[20px] mb-1">Koenigsegg</div>
                                    <p className="text-[#90A3BF] font-bold">Sport</p>
                                </div>

                                <Image src={heartRed} alt="" />
                            </div>

                            <Image src={car} alt="" className="my-16" />

                            <div className="flex items-center justify-between w-full mb-6">
                                <div className="flex items-center gap-2">
                                    <Image src={gasStation} alt="" />
                                    <span className="block text-[#90A3BF]">90L</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={shines} alt="" />
                                    <span className="block text-[#90A3BF]">Manual</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={profileTwoUsers} alt="" />
                                    <span className="block text-[#90A3BF]">2 People</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center text-[26px] font-bold">$99.00/<span className="block text-[16px] text-[#90A3BF]">day</span></div>
                                <button className="blue-button">Rent Now</button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-white rounded-[10px]">
                            <div className="flex items-start justify-between w-full">
                                <div>
                                    <div className="font-bold text-[20px] mb-1">Koenigsegg</div>
                                    <p className="text-[#90A3BF] font-bold">Sport</p>
                                </div>

                                <Image src={heartRed} alt="" />
                            </div>

                            <Image src={car} alt="" className="my-16" />

                            <div className="flex items-center justify-between w-full mb-6">
                                <div className="flex items-center gap-2">
                                    <Image src={gasStation} alt="" />
                                    <span className="block text-[#90A3BF]">90L</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={shines} alt="" />
                                    <span className="block text-[#90A3BF]">Manual</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={profileTwoUsers} alt="" />
                                    <span className="block text-[#90A3BF]">2 People</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center text-[26px] font-bold">$99.00/<span className="block text-[16px] text-[#90A3BF]">day</span></div>
                                <button className="blue-button">Rent Now</button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-white rounded-[10px]">
                            <div className="flex items-start justify-between w-full">
                                <div>
                                    <div className="font-bold text-[20px] mb-1">Koenigsegg</div>
                                    <p className="text-[#90A3BF] font-bold">Sport</p>
                                </div>

                                <Image src={heartRed} alt="" />
                            </div>

                            <Image src={car} alt="" className="my-16" />

                            <div className="flex items-center justify-between w-full mb-6">
                                <div className="flex items-center gap-2">
                                    <Image src={gasStation} alt="" />
                                    <span className="block text-[#90A3BF]">90L</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={shines} alt="" />
                                    <span className="block text-[#90A3BF]">Manual</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={profileTwoUsers} alt="" />
                                    <span className="block text-[#90A3BF]">2 People</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center text-[26px] font-bold">$99.00/<span className="block text-[16px] text-[#90A3BF]">day</span></div>
                                <button className="blue-button">Rent Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pb-8">
                    <div className="flex items-center justify-between w-full mb-5 py-[10px] px-[20px]">
                        <h6 className="text-[16px] text-[#90A3BF]">
                            Recomendation Car
                        </h6>
                    </div>

                    <div className="grid grid-cols-4 gap-8">
                        <div className="flex flex-col items-center p-6 bg-white rounded-[10px]">
                            <div className="flex items-start justify-between w-full">
                                <div>
                                    <div className="font-bold text-[20px] mb-1">Koenigsegg</div>
                                    <p className="text-[#90A3BF] font-bold">Sport</p>
                                </div>

                                <Image src={heartDefault} alt="" />
                            </div>

                            <Image src={car} alt="" className="my-16" />

                            <div className="flex items-center justify-between w-full mb-6">
                                <div className="flex items-center gap-2">
                                    <Image src={gasStation} alt="" />
                                    <span className="block text-[#90A3BF]">90L</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={shines} alt="" />
                                    <span className="block text-[#90A3BF]">Manual</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={profileTwoUsers} alt="" />
                                    <span className="block text-[#90A3BF]">2 People</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center text-[26px] font-bold">$99.00/<span className="block text-[16px] text-[#90A3BF]">day</span></div>
                                <button className="blue-button">Rent Now</button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-white rounded-[10px]">
                            <div className="flex items-start justify-between w-full">
                                <div>
                                    <div className="font-bold text-[20px] mb-1">Koenigsegg</div>
                                    <p className="text-[#90A3BF] font-bold">Sport</p>
                                </div>

                                <Image src={heartRed} alt="" />
                            </div>

                            <Image src={car} alt="" className="my-16" />

                            <div className="flex items-center justify-between w-full mb-6">
                                <div className="flex items-center gap-2">
                                    <Image src={gasStation} alt="" />
                                    <span className="block text-[#90A3BF]">90L</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={shines} alt="" />
                                    <span className="block text-[#90A3BF]">Manual</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={profileTwoUsers} alt="" />
                                    <span className="block text-[#90A3BF]">2 People</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center text-[26px] font-bold">$99.00/<span className="block text-[16px] text-[#90A3BF]">day</span></div>
                                <button className="blue-button">Rent Now</button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-white rounded-[10px]">
                            <div className="flex items-start justify-between w-full">
                                <div>
                                    <div className="font-bold text-[20px] mb-1">Koenigsegg</div>
                                    <p className="text-[#90A3BF] font-bold">Sport</p>
                                </div>

                                <Image src={heartRed} alt="" />
                            </div>

                            <Image src={car} alt="" className="my-16" />

                            <div className="flex items-center justify-between w-full mb-6">
                                <div className="flex items-center gap-2">
                                    <Image src={gasStation} alt="" />
                                    <span className="block text-[#90A3BF]">90L</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={shines} alt="" />
                                    <span className="block text-[#90A3BF]">Manual</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={profileTwoUsers} alt="" />
                                    <span className="block text-[#90A3BF]">2 People</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center text-[26px] font-bold">$99.00/<span className="block text-[16px] text-[#90A3BF]">day</span></div>
                                <button className="blue-button">Rent Now</button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-white rounded-[10px]">
                            <div className="flex items-start justify-between w-full">
                                <div>
                                    <div className="font-bold text-[20px] mb-1">Koenigsegg</div>
                                    <p className="text-[#90A3BF] font-bold">Sport</p>
                                </div>

                                <Image src={heartRed} alt="" />
                            </div>

                            <Image src={car} alt="" className="my-16" />

                            <div className="flex items-center justify-between w-full mb-6">
                                <div className="flex items-center gap-2">
                                    <Image src={gasStation} alt="" />
                                    <span className="block text-[#90A3BF]">90L</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={shines} alt="" />
                                    <span className="block text-[#90A3BF]">Manual</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={profileTwoUsers} alt="" />
                                    <span className="block text-[#90A3BF]">2 People</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center text-[26px] font-bold">$99.00/<span className="block text-[16px] text-[#90A3BF]">day</span></div>
                                <button className="blue-button">Rent Now</button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-white rounded-[10px]">
                            <div className="flex items-start justify-between w-full">
                                <div>
                                    <div className="font-bold text-[20px] mb-1">Koenigsegg</div>
                                    <p className="text-[#90A3BF] font-bold">Sport</p>
                                </div>

                                <Image src={heartRed} alt="" />
                            </div>

                            <Image src={car} alt="" className="my-16" />

                            <div className="flex items-center justify-between w-full mb-6">
                                <div className="flex items-center gap-2">
                                    <Image src={gasStation} alt="" />
                                    <span className="block text-[#90A3BF]">90L</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={shines} alt="" />
                                    <span className="block text-[#90A3BF]">Manual</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={profileTwoUsers} alt="" />
                                    <span className="block text-[#90A3BF]">2 People</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center text-[26px] font-bold">$99.00/<span className="block text-[16px] text-[#90A3BF]">day</span></div>
                                <button className="blue-button">Rent Now</button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-white rounded-[10px]">
                            <div className="flex items-start justify-between w-full">
                                <div>
                                    <div className="font-bold text-[20px] mb-1">Koenigsegg</div>
                                    <p className="text-[#90A3BF] font-bold">Sport</p>
                                </div>

                                <Image src={heartRed} alt="" />
                            </div>

                            <Image src={car} alt="" className="my-16" />

                            <div className="flex items-center justify-between w-full mb-6">
                                <div className="flex items-center gap-2">
                                    <Image src={gasStation} alt="" />
                                    <span className="block text-[#90A3BF]">90L</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={shines} alt="" />
                                    <span className="block text-[#90A3BF]">Manual</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={profileTwoUsers} alt="" />
                                    <span className="block text-[#90A3BF]">2 People</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center text-[26px] font-bold">$99.00/<span className="block text-[16px] text-[#90A3BF]">day</span></div>
                                <button className="blue-button">Rent Now</button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-white rounded-[10px]">
                            <div className="flex items-start justify-between w-full">
                                <div>
                                    <div className="font-bold text-[20px] mb-1">Koenigsegg</div>
                                    <p className="text-[#90A3BF] font-bold">Sport</p>
                                </div>

                                <Image src={heartRed} alt="" />
                            </div>

                            <Image src={car} alt="" className="my-16" />

                            <div className="flex items-center justify-between w-full mb-6">
                                <div className="flex items-center gap-2">
                                    <Image src={gasStation} alt="" />
                                    <span className="block text-[#90A3BF]">90L</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={shines} alt="" />
                                    <span className="block text-[#90A3BF]">Manual</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={profileTwoUsers} alt="" />
                                    <span className="block text-[#90A3BF]">2 People</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center text-[26px] font-bold">$99.00/<span className="block text-[16px] text-[#90A3BF]">day</span></div>
                                <button className="blue-button">Rent Now</button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-white rounded-[10px]">
                            <div className="flex items-start justify-between w-full">
                                <div>
                                    <div className="font-bold text-[20px] mb-1">Koenigsegg</div>
                                    <p className="text-[#90A3BF] font-bold">Sport</p>
                                </div>

                                <Image src={heartRed} alt="" />
                            </div>

                            <Image src={car} alt="" className="my-16" />

                            <div className="flex items-center justify-between w-full mb-6">
                                <div className="flex items-center gap-2">
                                    <Image src={gasStation} alt="" />
                                    <span className="block text-[#90A3BF]">90L</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={shines} alt="" />
                                    <span className="block text-[#90A3BF]">Manual</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={profileTwoUsers} alt="" />
                                    <span className="block text-[#90A3BF]">2 People</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center text-[26px] font-bold">$99.00/<span className="block text-[16px] text-[#90A3BF]">day</span></div>
                                <button className="blue-button">Rent Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center w-full mt-8">
                <a href="#" className="blue-button inline-flex">
                    Show more car
                </a>
            </div>
        </section >
    );
}