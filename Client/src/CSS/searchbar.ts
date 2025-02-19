import styled from "styled-components";

export const Navbar = styled.div`
    top: 8px;
    right: 0px;
    filter: drop-shadow(1px 1px 6px black);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    flex-wrap: wrap;
    padding-inline: 10px;
    
    form {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }

    input[type='search'] {
        text-align: center;
        font: inherit;
        padding: 5px;
        border-radius: 5px;
        border: none;
        width: 15rem;
        max-width: 100%;
        right: 150px;
    }
    a{
        text-decoration: none;
        color: var(--text-color)
    }
    ul {
        gap: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        list-style-type: none;
        padding: 0px;
        margin: 0px;
    }
    li {
        text-decoration: none;
    }

    .nav-btn {
        background-color: green;
        color: var(--text-color);
        height: 30px;
        border-radius: 5px;
        font-size: .5cm;
        padding: 5px;
        border: none;
        transition: 300ms;
    }
    .nav-btn:hover{
        background-color: yellow;
        color: var(--bg-color);
    }

    .user-info{
        display: flex;
        flex-direction: row;
        gap: 10px;
        flex-wrap: wrap;
    }
`;