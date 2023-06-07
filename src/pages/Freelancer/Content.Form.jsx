const ContentForm = () => {
  return (
    <div className="w-full  border-2 border-dashed  bg-black  p-5 shadow">
      <h2 className="mb-4 font-lable text-lg font-semibold text-white ">
        Post Content
      </h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="mb-2 block font-semibold text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full rounded border border-gray-300 px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="mb-2 block font-semibold text-white"
          >
            Content
          </label>
          <textarea
            id="content"
            className="w-full rounded border border-gray-300 px-3 py-2"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="mb-2 block font-semibold text-white"
          >
            Image
          </label>
          <input
            id="content"
            type="file"
            className="w-full rounded border border-gray-300 px-3 py-2"
          />
        </div>
        <div className="text-right">
          <button type="submit" className="custom-button-white">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};
export default ContentForm;
