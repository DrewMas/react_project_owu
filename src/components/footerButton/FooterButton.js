const FooterButton = ({...props})=> {

    return (
        <div className={`button ${props.element.isActive === true ? 'button_active' : ' '}`}>
            <span className={'buttonNumber'}>{props.element.number}</span>
        </div>
    );
}

export default FooterButton;
