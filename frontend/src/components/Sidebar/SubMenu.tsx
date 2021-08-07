const SubMenu = ({ item }: any) => {
  return (
    <li>
      <a href={item.path} id="link-a" className="link-a">
        <div id="image-img" className="image-img">
          {item.icon}
        </div>
      </a>
    </li>
  );
};

export default SubMenu;
