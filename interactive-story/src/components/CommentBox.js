import React, { useState, useRef } from "react";
import cn from "classnames";
import useDynamicHeightField from "./useDynamicHeighField";
import "../styles/CommentBox.css";
import Thomas from "../img/thomas.jpg";

const INITIAL_HEIGHT = 46;

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/how-to-build-an-expandable-comment-box
 */
export default function CommentBox() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [commentValue, setCommentValue] = useState("");

  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  useDynamicHeightField(textRef, commentValue);

  const onExpand = () => {
    if (!isExpanded) {
      outerHeight.current = containerRef.current.scrollHeight;
      setIsExpanded(true);
    }
  };

  const onChange = (e) => {
    setCommentValue(e.target.value);
  };

  const onClose = () => {
    setCommentValue("");
    setIsExpanded(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(commentValue);
    document.getElementById("commentaire").innerHTML =
      " Chaoumet : " + commentValue;
  };

  return (
    <div className="container">
      <span>Jean-Michel : J'ai beaucoup apprécié</span>
      <br />
      <span id="commentaire"></span>
      <form
        onSubmit={onSubmit}
        ref={containerRef}
        className={cn("comment-box", {
          expanded: isExpanded,
          collapsed: !isExpanded,
          modified: commentValue.length > 0,
        })}
        style={{
          minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT,
        }}
      >
        <div className="header">
          <div className="user">
            <img src={Thomas} width={40} alt="User avatar" />
            <span>Chaoumet</span>
          </div>
        </div>
        <label id="lelabel" htmlFor="comment">Laisser un commentaire</label>
        <textarea
          ref={textRef}
          onClick={onExpand}
          onFocus={onExpand}
          onChange={onChange}
          className="comment-field"
          placeholder="Laissez un commentaire"
          value={commentValue}
          name="comment"
          id="comment"
        />
        <div className="actions">
          <button type="button" className="cancel" onClick={onClose}>
            Annuler
          </button>
          <button id="lebouton" type="submit" disabled={commentValue.length < 1}>
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
