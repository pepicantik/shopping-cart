const Profile = () => {
    const username = localStorage.getItem("username");

    return (
        <div className="rounded-xl bg-white p-6 shadow-sm">
            <h1 className="mb-3 text-2xl font-bold text-gray-800">
                My Profile
            </h1>

            <p className="text-gray-600">
                Selamat datang, {username}!
            </p>

            <p className="mt-2 text-gray-500">
                Ini asalah halaman Profile.
            </p>
        </div>
    )
};

export default Profile;