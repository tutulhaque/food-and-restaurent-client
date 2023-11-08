import memberTwo from '../../assets/member2.png';
import memberThree from '../../assets/member4.png';
const Testimonial = () => {
    return (
        <div className="py-20 max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-center">Our Customer Review</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3">

            <section className="bg-white dark:bg-gray-900">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                        <figure className="max-w-screen-md mx-auto">
                            <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                            </svg>
                            <blockquote>
                                <p className="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center mt-6 space-x-3">

                                    <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="" />
                                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                                    </div>
                            </figcaption>
                        </figure>
                    </div>
                </section>

                {/* Testimonial 2 */}
                <section className="bg-white dark:bg-gray-900">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                        <figure className="max-w-screen-md mx-auto">
                            <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                            </svg>
                            <blockquote>
                                <p className="text-2xl font-medium text-gray-900 dark:text-white">"Slowbite is simply fantastic. It has a ton of predesigned elements, from the login screen to the intricate dashboard. Ideal option for your upcoming SaaS application."</p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center mt-6 space-x-3">

                                    <img className="w-6 h-6 rounded-full" src={memberThree} alt="" />
                                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div className="pr-3 font-medium text-gray-900 dark:text-white">Taylor Swift</div>
                                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Microsoft</div>
                                    </div>
                            </figcaption>
                        </figure>
                    </div>
                </section>
                {/* Testimonial 3 */}
                <section className="bg-white dark:bg-gray-900">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                        <figure className="max-w-screen-md mx-auto">
                            <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                            </svg>
                            <blockquote>
                                <p className="text-2xl font-medium text-gray-900 dark:text-white">"Gigraw is truly amazing. From the login screen to the intricate dashboard, it has a ton of predesigned elements and pages. ideal option for your subsequent SaaS project."</p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center mt-6 space-x-3">

                                    <img className="w-6 h-6 rounded-full" src={memberTwo} alt="" />
                                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div className="pr-3 font-medium text-gray-900 dark:text-white">Bella Hadith</div>
                                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Apple</div>
                                    </div>
                            </figcaption>
                        </figure>
                    </div>
                </section>
            </div>


        </div>
    );
};

export default Testimonial;