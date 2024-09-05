// A newsletter subscription form with a consent checkbox which uses Supabase and stores the email address in a table.
// The project is written in Typescript using Next.js and TailwindCSS

// The code starts by importing the useState hook from React. We’ll use this to store the email address entered by the user.
import { useState } from "react";
// We then import the createClient method from Supabase. 
import { createClient } from '@supabase/supabase-js'
import { useTranslation } from "react-i18next";


// This method takes two arguments: a Supabase URL, and an anonymous token. You can find these values in your Supabase dashboard.
// We then initialize a new Supabase client with the URL and token.
const supabase = createClient('https://rcyuoexwpqvqwjjoeqsx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjeXVvZXh3cHF2cXdqam9lcXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2OTM1MTcsImV4cCI6MjAwNDI2OTUxN30.9t3G1l3EzJ8Ol5As4WAJv-sgxMfsz0W_v_2-PIbe0II');

export default function NewsletterForm() {

    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [consent, setConsent] = useState(false); // New state variable for consent
    const [consentError, setConsentError] = useState(''); // New state variable for consent error message
    const { t } = useTranslation("home");


    // Next we define a function called subscribe. This function will insert the user’s email address into a table called subscribers.
    const subscribe = async () => {
        event.preventDefault(); // Prevent form from submitting
        if (!consent) {
            setConsentError('You must give your consent to be contacted.'); // Set error message if consent is not given
            return;
        }
        const { data, error } = await supabase
            .from('subscribers')
            .insert([{ email, consent }])
        if (error) {
            console.log(error)
        } else {
            setIsSubscribed(true);
        }
    }

    // We then define a function called isValidEmail which checks if the email address entered by the user is valid.
    const isValidEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    return (



        // We then return a form with an input field and a button.

        <div className="flex flex-row px-6 mx-auto pt-16 max-w-7xl lg:px-8 justify-center">
            <div className="flex flex-col w-full justify-center gap-8 items-baseline">
                <h2 className="mx-auto bg-gradient-to-r from-teal-400 via-teal-500 to-sky-600 bg-clip-text text-lg font-semibold tracking-tight text-transparent lg:text-4xl">
                    {t("Subscribe to our newsletter")}
                </h2>
                <form className="sm:flex justify-center w-full">
                    <div className="grid grid-cols-1 max-w-sm">
                        <input id="emailAddress" name="emailAddress" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none min-w-0 w-full bg-transparent border border-zinc-700 rounded shadow-sm px-3.5 py-1 text-sm text-zinc-200 placeholder-zinc-800 focus:ring-0 focus:outline-none " placeholder={t("Enter your email")} />

                        {/*// Consent checkbox*/}
                        <div className="mt-4 max-w-sm ">
                            <input id="consent" name="consent" type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="h-4 w-4 rounded-sm border-zinc-600 text-teal-600 focus:ring-0 focus:border-0 bg-transparent" />
                            <label htmlFor="consent" className="ml-2 leading-3 text-xs text-zinc-600 ">{t("I agree to receive marketing mails from Poker Scientist")}.</label>
                        </div>
                    </div>
                    {/* Consent error message
                                {consentError && <p className="text-red-500 mt-2">{consentError}</p>}
                                */}

                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                        <button
                            type="button"
                            onClick={subscribe}
                            disabled={!consent || !isValidEmail(email)}
                            className={`w-full flex items-center justify-center duration-300 rounded px-3.5 py-1 leading-7 text-sm font-semibold   shadow-sm ${consent && isValidEmail(email) ? 'bg-gradient-to-r from-pink-500 text-white via-pink-600 to-pink-700 hover:bg-gradient-to-r hover:from-pink-600 hover:via-pink-700 hover:to-pink-800 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600' : 'bg-zinc-700 text-zinc-600 cursor-not-allowed'} focus:outline-none focus:ring`}>
                            {t("Notify me")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}