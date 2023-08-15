import React,{useState} from 'react'
import classes from './Categories.module.css'
const Categories = () => {
  let categories = [
    "All",
    "React js",
    "Angular js",
    "Node js",
    "React Native",
    "Flutter",
    "Laravel",
    "Django",
    "Flask",
    "PHP",
    "Javascript",
    "Python",
    "Java",
    "C++",
    "C#",
    "C",
    "Ruby",
    "Rust",
    "Go",
    "Swift",
    "Kotlin",
    "Dart",
    "Machine Learning",
    "Data Science",
    "Artificial Intelligence"
  ]
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (item) => {
    setSelectedCategory(item);
  };

  return (
    <div className={classes.categories}>
      {categories.map((item, index) => (
        <span
          className={`${classes.category} ${selectedCategory === item ? classes.selected : ''}`}
          onClick={() => handleCategoryClick(item)}
          key={index}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default Categories;
