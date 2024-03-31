import { useContext } from "react";
import GlobalContext from "../GlobalContext";
import { IoIosClose } from "react-icons/io";

function TagInput() {
  const { tags, setTags, inputValue, setInputValue } =
    useContext(GlobalContext);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      addTag(inputValue);
    }
  };

  const handleAddButtonClick = () => {
    addTag(inputValue);
  };

  const addTag = (tagToAdd) => {
    const newTag = tagToAdd.trim();

    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setInputValue("");
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  return (
    <div className="">
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder="Add a tag..."
          className="w-full h-[40px] rounded-lg pl-4 border border-gray-300"
        />
        <div className="flex flex-row gap-2 flex-wrap mt-2">
          {tags.map((tag, index) => (
            <div className="flex flex-row gap-5 flex-wrap">
              <div
                key={index}
                className="tag p-3 flex justify-center items-center min-w-[64px] min-h-[34px] max-h-auto bg-blue-400 rounded-lg gap-1"
              >
                {tag}
                <button
                  className=""
                  type="button"
                  onClick={() => handleTagRemove(tag)}
                >
                  <IoIosClose className="text-lg text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleAddButtonClick}
          className="bg-white border border-blue-500 font-semibold hover:bg-blue-500 hover:border-none hover:text-white text-blue-500 w-[80px] h-9 mt-2 rounded-md"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TagInput;
