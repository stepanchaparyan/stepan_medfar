import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 8px;
    padding: 4px;
    border: solid 1px cadetBlue;
    border-radius: 4px;
    min-width: 180px;
    height: 180px;
    align-items: center;
`;

export const PostStyled = styled.img`
    height: 240px;
    width: 240px;
    border-radius: 4px;
`;

export const PostName = styled.div`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 12px;
`;

export const PostPrice = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

export const PostRate = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

export const ButtonContainer = styled.div`
    display: flex;
    margin: 12px 4px;
`;

export const ButtonStyled = styled.button`
    font-size: 16px;
    background: none;
    outline: none;
    cursor: pointer;
    border-radius: 4px;
    border-color: cadetBlue;
    padding: 4px 8px;
    margin: 12px 4px;
`;