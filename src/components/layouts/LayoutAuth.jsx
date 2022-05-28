import videoClip from "/assets/videos/clip.mp4";

const LayoutAuth = ({ children }) => {
  return (
    <div className="flex flex-row h-screen w-full">
      <header className="absolute z-10 top-10 flex justify-center w-full">
        <h1 className="text-center text-green-500 text-5xl font-bold bg-gray-900 px-5 py-4 border-green-500 border-2 rounded-tl-3xl rounded-br-3xl">
          CONTACT LIST
        </h1>
      </header>
      <video
        className="w-1/2 h-screen object-cover object-left"
        loop
        autoPlay
        muted
      >
        <source src={videoClip} media="video/mp4" />
      </video>
      <main className="flex flex-col justify-center items-center h-screen w-1/2 bg-gray-900">
        {children}
      </main>
    </div>
  );
};

export default LayoutAuth;
