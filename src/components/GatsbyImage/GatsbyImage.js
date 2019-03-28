import {graphql} from "gatsby";

export const fluidImage = graphql`
fragment fluidImage on File {
	childImageSharp {
		fluid(maxWidth: 1920) {
			...GatsbyImageSharpFluid_withWebp
		
		}
	}
}
`;

export const fluidImageTablet = graphql`
fragment fluidImageTablet on File {
	childImageSharp {
		fluid(maxWidth: 991) {
			...GatsbyImageSharpFluid_withWebp
		
		}
	}
}
`;

export const fluidImageMobile = graphql`
fragment fluidImageMobile on File {
	childImageSharp {
		fluid(maxWidth: 576) {
			...GatsbyImageSharpFluid_withWebp
		
		}
	}
}
`;