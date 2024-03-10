import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const MainBlockCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 48px;
    padding-left: 121px;
    position: relative;
    bottom: 59px;
`

export const BlockCard = styled(Link)`
    width: 379px;
`

export const Card = styled.img`
    width: 100%;
`