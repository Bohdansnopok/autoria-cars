import Image from "next/image"
import logo from "../../public/Logo.png"

export default function Footer() {
    return (
        <footer className="pt-20 bg-white pb-[60px]">
            <div className="custom-container w-full">
                <div className="flex justify-between w-full pb-9">
                    <div>
                        <Image src={logo} alt="" />
                        <p className="mt-4 text-[16px] text-[#131313] text-[rgb(19,19,19,0.6)]">Our vision is to provide convenience <br /> and help increase your sales business.</p>
                    </div>

                    <div className="grid grid-cols-3 gap-[74px]">
                        <div>
                            <div className="mb-6 text-[20px] font-semibold">About</div>
                            <div className="flex flex-col gap-5">
                                <a href="" className="block text-[16px] text-[#131313] text-[rgb(19,19,19,0.6)]">How it works</a>
                                <a href="" className="block text-[16px] text-[#131313] text-[rgb(19,19,19,0.6)]">Featured</a>
                                <a href="" className="block text-[16px] text-[#131313] text-[rgb(19,19,19,0.6)]">Partnership</a>
                                <a href="" className="block text-[16px] text-[#131313] text-[rgb(19,19,19,0.6)]">Bussiness Relation</a>
                            </div>
                        </div>

                        <div>
                            <div className="mb-6 text-[20px] font-semibold">Community</div>
                            <div className="flex flex-col gap-5">
                                <a href="" className="block text-[16px] text-[#131313] text-[rgb(19,19,19,0.6)]">Events</a>
                                <a href="" className="block text-[16px] text-[#131313] text-[rgb(19,19,19,0.6)]">Blog</a>
                                <a href="" className="block text-[16px] text-[#131313] text-[rgb(19,19,19,0.6)]">Podcast</a>
                                <a href="" className="block text-[16px] text-[#131313] text-[rgb(19,19,19,0.6)]">Invite a friend
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="mb-6 text-[20px] font-semibold">Socials</div>
                            <div className="flex flex-col gap-5">
                                <a href="" className="block text-[16px] text-[#131313] text-[rgb(19,19,19,0.6)]">Discord</a>
                                <a href="" className="block text-[16px] text-[#131313] text-[rgb(19,19,19,0.6)]">Instagram</a>
                                <a href="" className="block text-[16px] text-[#131313] text-[rgb(19,19,19,0.6)]">Twitter</a>
                                <a href="" className="block text-[16px] text-[#131313] text-[rgb(19,19,19,0.6)]">Facebook</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between border-t border-[131313] border-[rgb(19,19,19,0.16)] pt-9">
                    <p className="font-semibold">©2022 MORENT. All rights reserved</p>
                    <div className="flex items-center gap-[60px]">
                        <a href="" className="block font-semibold">Privacy & Policy</a>
                        <a href="" className="block font-semibold">Terms & Condition</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
