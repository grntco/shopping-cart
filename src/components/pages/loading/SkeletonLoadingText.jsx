import { styled, keyframes } from 'styled-components'

const skeletonLoading = keyframes`
    0% {
        background-color: hsl(200, 20%, 80%);
    }
    100% {
        background-color: hsl(200, 20%, 95%);
    }
`
const SkeletonLoadingText = styled.div`
    background-color: grey;
    padding: 12px;
    width: 196px;
    border-radius: 12px;
    animation: ${skeletonLoading} 1s linear infinite alternate;
`

export default SkeletonLoadingText
