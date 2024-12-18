import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";
const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected />
          ))}
          {/* <Tag tagName="HTML" />
          <Tag tagName="CSS" /> */}
          {/* <Tag tagName="JavaScript" />
          <Tag tagName="React" /> */}
        </div>
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img src={deleteIcon} className="delete_icon" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
