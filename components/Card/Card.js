import React, {
    cloneElement,
    createContext,
    useContext,
    useEffect,
    useState
  } from "react";


  const LIMIT = 3;
  
  const CardContext = createContext();
  
  const Card = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
  
    const expand = () => {
      setIsCollapsed(!isCollapsed);
    };
  
    const collapse = () => {
      setIsCollapsed(!isCollapsed);

    };

    const detail = () => {
      setIsOpen(!isOpen);
      console.log(`detail called`)
      alert('are you sure?');
    };

    const value = { isCollapsed, isOpen, expand, collapse, detail };
    return (
      <CardContext.Provider value={value}>
        <div className="list-deal-group">{children}</div>
      </CardContext.Provider>
    );
  };
  
  const CardContent = ({ children }) => { 
    const { isCollapsed } = useContext(CardContext);
    return children.map((child, index) => {
      if (isCollapsed) {
        while (LIMIT > index) {
          return <div key={index}>{child}</div>;
        }
      } else {
        return <div key={index}>{child}</div>;
      }
    });
  };
  
  const Expand = ({ children }) => {
    const { expand, isCollapsed } = useContext(CardContext);
    return isCollapsed && cloneElement(children, { onClick: expand });
    // return isCollapsed && children;
    // return isCollapsed && {children};
  };
  
  const Collapse = ({ children }) => {
    const { collapse, isCollapsed } = useContext(CardContext);
    return !isCollapsed && cloneElement(children, { onClick: collapse });
  };

  const Detail = ({children}) => {
    const { detail, isOpen } = useContext(CardContext);
    return !isOpen && cloneElement(children, { onClick: detail });
  }
  
  Card.CardContent = CardContent;
  Card.Expand = Expand;
  Card.Collapse = Collapse;
  Card.Detail = Detail;
  
  export default Card;
  