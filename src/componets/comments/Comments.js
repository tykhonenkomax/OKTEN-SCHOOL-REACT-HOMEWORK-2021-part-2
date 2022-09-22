import {Comment} from "../comment/Comment";

const Comments = ({comments}) => {

  return (
      <div>
        {
          comments.map(comments => <Comment key={comments.id} comment={comments}/>)
        }
      </div>
  );
};

export {Comments};