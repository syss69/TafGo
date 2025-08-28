import { useState } from "react"

type Props = {
  onSwitch: () => void;
};

function UserRegistrationForm ({ onSwitch }: Props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({userName: name, userEmail: email, password: password})
    };

    return (
        <div>
            <p className="text-center">That is a registration form for user. Want to register your company? 
                <button
                    onClick={onSwitch}
                    className="text-blue-600 hover:underline transition-colors"
                >
                    Click here
                </button>
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium">
                    Full Name
                    </label>
                    <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                    placeholder="Your password"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium ">
                    Email
                    </label>
                    <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                    placeholder="you@example.com"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium">
                    Password
                    </label>
                    <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                    placeholder="Your password"
                    required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Login
                </button>
                </form>
                <p className="mt-6 text-sm text-gray-600 text-center">
                Already have an account?{" "}
                <a href="/auth/login" className="text-blue-600 hover:underline">
                    Login
                </a>
                </p>
                <p className="mt-6 text-sm text-gray-600 text-center">
                Password forgotten?{" "}
                <a href="/register" className="text-blue-600 hover:underline">
                    Drop password
                </a>
                </p>
        </div>
    )
}

export default UserRegistrationForm;