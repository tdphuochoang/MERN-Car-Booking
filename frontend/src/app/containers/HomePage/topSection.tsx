import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import JeepCarImg from "../../../assets/images/redJeepCar.png";
import BlogImg from "../../../assets/images/BlogImg.svg";
import { SCREENS } from "../../components/responsive";
import { Button } from "../../components/button";

const TopSectionContainer = styled.div`
	min-height: 400px;
	margin-top: 3em;

	@media (min-width: ${SCREENS.sm}) {
		margin-top: 8em;
	}

	@media (min-width: ${SCREENS.lg}) {
		margin-top: 9em;
	}

	@media (min-width: ${SCREENS.xl}) {
		margin-top: 10em;
	}

	${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        pl-3
        pr-3
        lg:pl-12
        lg:pr-12
    `}
`;

const LeftContainer = styled.div`
	${tw`
        w-1/2
        flex
        flex-col
        pl-5
        pr-5
    `}
`;

const RightContainer = styled.div`
	${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `}
`;

const Slogan = styled.h1`
	${tw`
        font-bold
        text-xl
        xl: text-6xl
        sm: text-xl
        md: text-3xl
        lg: font-black
        md: font-extrabold
        text-black
        mb-4
        sm: leading-snug
        lg: leading-normal
        xl: leading-relaxed
    `}
`;

const Description = styled.p`
	${tw`
        text-xs
        lg: text-sm
        xl: text-lg
        sm: max-h-full
        overflow-hidden
        max-h-12
        text-gray-800
    `}
`;

const BlobContainer = styled.div`
	width: 18em;
	height: 10em;
	position: absolute;
	right: -1em;
	top: -6em;
	z-index: -1;
	transform: rotate(-30deg);

	img {
		width: 100%;
		height: auto;
		max-height: max-content;
	}

	@media (min-width: ${SCREENS.sm}) {
		width: 37em;
		max-height: 10em;
		right: -10em;
		top: -18em;
		transform: rotate(10deg);
	}

	@media (min-width: ${SCREENS.lg}) {
		width: 45em;
		max-height: 20em;
		right: -11em;
		top: -22em;
		transform: rotate(10deg);
	}

	@media (min-width: ${SCREENS.xl}) {
		width: 60em;
		max-height: 30em;
		right: -15em;
		top: -31em;
		transform: rotate(10deg);
	}
`;

const StandaloneCar = styled.div`
	width: auto;
	height: 12em;
	right: 0em;
	top: -4em;
	position: absolute;

	img {
		width: auto;
		height: 100%;
		max-width: fit-content;
	}

	@media (min-width: ${SCREENS.sm}) {
		height: 20em;
		right: 1em;
		top: -9em;
	}

	@media (min-width: ${SCREENS.lg}) {
		height: 25em;
		right: 2em;
		top: -12em;
	}

	@media (min-width: ${SCREENS.xl}) {
		height: 30em;
		right: 6em;
		top: -15em;
	}
`;

const ButtonContainer = styled.div`
	${tw`
        flex
        flex-wrap
        mt-5
    `}
`;

export const TopSection = () => {
	return (
		<TopSectionContainer>
			<LeftContainer>
				<Slogan>Rent The Best Quality Cars With Us</Slogan>
				<Description>
					Always choose the best car from our local stores or order it remotely
					at the best price for you and get the best quality cars for as long as
					you like
				</Description>
				<ButtonContainer>
					<Button text="Book Your Ride" />
					<Button theme="filled" text="Sell Your Car" />
				</ButtonContainer>
			</LeftContainer>
			<RightContainer>
				<BlobContainer>
					<img src={BlogImg} />
				</BlobContainer>
				<StandaloneCar>
					<img src={JeepCarImg} />
				</StandaloneCar>
			</RightContainer>
		</TopSectionContainer>
	);
};
