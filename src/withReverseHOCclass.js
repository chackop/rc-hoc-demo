const reverseHOC = (PassedComponent) =>
    ({ children, ...props }) =>
        <PassedComponent {...props}>
            {children.split("").reverse().join("")}
        </PassedComponent>

// const nameElement = (props) => <span>{props.children}</span>

// const reversedName = reverse(nameElement)

export default reverseHOC