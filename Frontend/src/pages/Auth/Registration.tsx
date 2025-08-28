import { useState } from "react";

import UserRegistrationForm from "../../components/Auth/UserRegistartionForm";
import CompanyRegistrationForm from "../../components/Auth/CompanyRegistrationForm";

function Registration () {

    const [userRegistartion, setUserRegistartion] = useState(true);

    return (
         <div className="flex justify-center">
            <div className="w-full max-w-md rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center mb-6">
                Registration
                </h2>
                {userRegistartion ? (
                    <UserRegistrationForm onSwitch={() => setUserRegistartion(false)} />
                    ) : (
                    <CompanyRegistrationForm onSwitch={() => setUserRegistartion(true)} />
                )}
            </div>
        </div>
    )
}

export default Registration;