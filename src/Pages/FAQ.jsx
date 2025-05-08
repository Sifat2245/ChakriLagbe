import React from 'react';

const FAQ = () => {
    return (
        <div className='w-4/5 lg:w-2/3 mx-auto mb-32'>
            <div className='text-center mb-8'>
                <h1 className='text-3xl font-bold mb-2'>Frequently Asked Questions</h1>
                <p className='text-[#0000008c]'>We help employers and candidates find the right fit</p>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold">How does the free trial work?</div>
                <div className="collapse-content text-sm">Select a plan and get a free 4-day free trial in any subscription plan. Post jobs for free during your trial period. When your free trial ends, we’ll charge the payment method you provided during signup. You can pause, cancel, or change your subscription at any time by signing into your account.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Where is my job posting advertised?</div>
                <div className="collapse-content text-sm">Your job posting is seen on Chakri Lagbe, hundreds of local news sites, our mobile app, and Chakri Lagbe network sites.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Is there a limit to how many candidates can apply to my posting?</div>
                <div className="collapse-content text-sm">No! The sky’s the limit for the duration of your posting.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">How soon will I start receiving resumes?</div>
                <div className="collapse-content text-sm">Your job posting will be live within an hour of posting, and you will start to receive resumes from applicants as soon as we get them.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">How long will it take to post my job?</div>
                <div className="collapse-content text-sm">Our simple job posting form should only take a few minutes to complete. You’ll need to include your job’s title, location, description, and the email address where you want to have applications sent.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">I’m not sure what to put in my job posting. Can you help?</div>
                <div className="collapse-content text-sm">Absolutely! Check out our guide to writing great job descriptions. And for some extra guidance, take a look at some of our sample job descriptions.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">What is your cancellation policy?</div>
                <div className="collapse-content text-sm">You’re free to cancel your Monthly Value Plan any time via the link in your Customer Account Preferences. You will still be able to use your Plan if there are remaining days in your current 30-day cycle.</div>
            </div>
        </div>
    );
};

export default FAQ;