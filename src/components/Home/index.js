// Write your code here
// import {GradientDirectionItemContainer, DirectionItem} from './styledComponents'
import Header from '../Header'
import BusinessCard from '../BusinessCard'
import IndustryCard from '../IndustryCard'
import ExpertCard from '../ExpertCard'

import {
  MakeYourBusinessContainer,
  MakeYourBusinessHeading,
  MakeYourBusinessSubContainer,
  IndustryContainer,
  IndustryHeading,
  IndustryList,
  IndustryDescription,
  ExpertContainer,
  ExpertHeading,
  ExpertDescription,
  ExpertSubContainer,
  ViewAllResourceButton,
  MainHeadingContainer,
  MainHeading,
  MainDescriptionContainer,
  MainDescription,
  InputContainer,
  InputElement,
  GetDemoButton,
  SiteBackgroundImage,
  TrustedCompaniesContainer,
  TrustedCompaniesHeading,
  TrustedBrandList,
  BrandImage,
  MemberCardContainer,
  MemberCardSubContainer,
  MemberCardRowOne,
  LeftContainer,
  ProfileImage,
  RightContainer,
  MemberCardRowTwo,
  MemberCardRowThree,
  MemberCardRowFour,
  MemberCardRowFourChild,
  MemberCardRowFive,
  MemberCardRowSix,
  SmallCard,
  NameContainer,
  PositionContainer,
  BusinessNxtLevelContainer,
  BusinessNxtLevelMainHeading,
  BusinessNxtLevelHeading,
  BusinessNxtLevelSubContainer,
  BusinessNxtLevelCard,
  BusinessNxtLevelDescription,
  BusinessNxtLevelCardSubCon,
  BusinessNxtLevelCardSecCon,
  BusinessCardImage,
  BusinessCardSubCon,
  BusinessCardSubHeading,
  BusinessCardSubDes,
  ReadyToGrowContainer,
  ReadyToGrowHeading,
  ReadyToGrowDescription,
  RattingContainer,
  RattingText,
  RattingImage,
  ImageContainer,
  GoogleImage,
  CapterraImage,
  SoftwareAdviceImage,
  FooterContainer,
  FooterAppLogo,
  FooterSubContainer,
  FooterSubContainerOne,
  ProductsContainer,
  ProductsHeading,
  Para,
  PartnerContainer,
  PartnerHeading,
  FooterIndustryContainer,
  FooterIndustryHeading,
  AddressContainer,
  CountryName,
  Address,
  SocialMediaImageContainer,
  SocialMediaImage,
  CopyRightsContainer,
  CopyRightsHeading,
  PolicyContainer,
  PolicyTitle,
  ProductsNameCon,
  ProductUsedContainer,
} from './styledComponents'

const makeYourBusinessDataList = [
  {
    id: 1,
    title: 'Get discovered by more customers',
    description:
      'Higher reviews & better listings make you more discoverable to people organically',
    imgUrl:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62cc453f2139195799ff1678_Mask%20Group%20109.webp',
  },
  {
    id: 2,
    title: 'Faster conversion with our Captain AI',
    description:
      'Automate web chat, messaging, reviews & feedbacks with our AI assistant',
    imgUrl:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62def85e197fa06b03e4005b_Group%2018718.webp',
  },
  {
    id: 3,
    title: 'Marketing that works for you',
    description:
      'Run highly effective & targeted campaigns on text & emails and put your customer data to use',
    imgUrl:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dee8fb4ff877b8c4b92833_new111.webp',
  },
  {
    id: 4,
    title: 'Training & Support',
    description:
      'Talk to a dedicated relationship manager to get the help you need. No wait time, a dedicated line just for you.',
    imgUrl:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dee8fba79d98b49f7812a5_new222.webp',
  },
]

const industryDataList = [
  {
    id: 1,
    imgUrl:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d32dfae5cd2e139e5_Group%2018673.svg',
    title: 'Healthcare',
  },
  {
    id: 2,
    imgUrl:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7c6aace717f0cd9c6b_Group%2018674.svg',
    title: 'Dental',
  },
  {
    id: 3,
    imgUrl:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7ee724d71235537f0b_Group%2018681.svg',
    title: 'Home Services',
  },
  {
    id: 4,
    imgUrl:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d9f7f1bb4a89eedec_Group%2018675.svg',
    title: 'Retail',
  },
  {
    id: 5,
    imgUrl:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7ddd5081b753e27b8c_Group%2018676.svg',
    title: 'Hospitality',
  },
  {
    id: 6,
    imgUrl:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d132cbe948c251a1b_Group%2018677.svg',
    title: 'Automotive',
  },
  {
    id: 7,
    imgUrl:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e8642e919312d89de_Group%2018678.svg',
    title: 'Restaurants',
  },
  {
    id: 8,
    imgUrl:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e13ffea380326cf92_Group%2018679.svg',
    title: 'Wellness',
  },
  {
    id: 9,
    imgUrl:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e8642e9d49c2d89dd_Group%2018680.svg',
    title: 'Professional Services',
  },
  {
    id: 10,
    imgUrl:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e9f7f1b11439eedef_Group%2018682.svg',
    title: 'Care Services',
  },
  {
    id: 11,
    imgUrl:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7eee175fd8089febf1_Group%2018683.svg',
    title: 'Financial Services',
  },
  {
    id: 12,
    imgUrl:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e9f7f1b73679eedee_Group%2018684.svg',
    title: 'Recreational Services',
  },
]

const expertDataList = [
  {
    id: 1,
    imgUrl:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe250a42e4ba76b2ab04_Mask%20Group%20166.webp',
    title: 'Google My Business Basics: How to get more customers from GMB.',
    description:
      'Customers want to find local proprietors on search engines and nearly 90 percent of that traffic goes to Google.',
  },
  {
    id: 2,
    imgUrl:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe243b03ce85cb2d8c9d_Mask%20Group%20165.webp',
    title: "How to use Google's Business Messaging tool to get new customers",
    description:
      'Today’s leading businesses aren’t just being found - they’re engaging the moment they’re discovered.',
  },
  {
    id: 3,
    imgUrl:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe2556fec0b3086291da_pexels-antoni-shkraba-4348404.webp',
    title: '6 Ways to Increase Your Website Traffic and Leads',
    description:
      'More than 61% of marketers have reported that attracting traffic to their website is their biggest challenge.',
  },
]

const secondCardsContainer = [
  {
    title: 'Attract',
    paradata: 'Attract more customers',
    arrData: [
      {
        id: 1,
        icon:
          'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec00a8aaf428800c75_Group%2018613.svg',
        title: 'Reviews',
        description: 'Improve ratings & get chosen more.',
      },
      {
        id: 2,
        icon:
          'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb4806cd1c4715ced5_Group%2018614.svg',
        title: 'Listing',
        description: 'improve listings & get seen more.',
      },
      {
        id: 3,
        icon:
          'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec43bcc550dc49c6e8_Group%2018624.svg',
        title: 'Marketing',
        description: 'Reach out to customers on text & email.',
      },
      {
        id: 4,
        icon:
          'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb12ef6612375a88c4_Group%2018618.svg',
        title: 'SmartPages',
        description: 'Engage more with our AI SEO.',
      },
    ],
  },
  {
    title: 'Engage',
    paradata: 'Convert leads to customers',
    arrData: [
      {
        id: 1,
        icon:
          'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb8a983469d6918815_Group%2018616.svg',
        title: 'WebChat',
        description: 'Convert leads on website chat with ou Ai.',
      },
      {
        id: 2,
        icon:
          'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb7cee6e0fc06b720a_Group%2018617.svg',
        title: 'Messaging',
        description: 'Engage with customers across all channels.',
      },
      {
        id: 3,
        icon:
          'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbebaaeb8c7e7cef4b97_Group%2018619.svg',
        title: 'Referrals',
        description: 'Let your customers refer you.',
      },
      {
        id: 4,
        icon:
          'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb12ef6662a15a88c5_Group%2018615.svg',
        title: 'Payments',
        description: 'Modernize your payment tools.',
      },
    ],
  },
  {
    title: 'Elevate',
    paradata: 'Provide a delightful experience',
    arrData: [
      {
        id: 1,
        icon:
          'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec5519b27af4eec871_Group%2018623.svg',
        title: 'Captain AI',
        description: 'Your AI assistant to drive growth',
      },
      {
        id: 2,
        icon:
          'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec4d64345353355417_Group%2018621.svg',
        title: 'Feedback & survey',
        description: 'Listen to your customers & delight them.',
      },
      {
        id: 3,
        icon:
          'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbecb9ed0fa8b30e3a47_Group%2018620.svg',
        title: 'Competition & Insights',
        description: 'Learn about your competitors & insights.',
      },
      {
        id: 4,
        icon:
          'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec4a3eedd06bd65d1a_Group%2018622.svg',
        title: 'Customer Manager',
        description: 'Manage all your customer data & activity.',
      },
    ],
  },
]

const memberCard = [
  {
    img:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341ce2debac5188bfaa5_Mask%20Group%20174.webp',
    name: 'Simon Page',
    position: 'Owner, Mamagato Restaurant',
    string:
      'In 2022 so far we are hitting our best months in customers & revenue even in an economic downturn',
    offer: '40%',
    offer_head: 'Average net profit increase',
    product_used: ['Messaging', 'Webchat', 'Reviews', 'Listings', 'Referrals'],
    id: 1,
  },
  {
    img:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341c025451d2b6d54b11_xZ4wg2Xj-2.webp',
    name: 'Daniel Wilson',
    position: 'Marketing head, The Air Conditioning Company',
    string:
      'Our rating improved from 3.3 to 4.6 & reviews are up 200%, we are getting more leads from Google',
    offer: '200%',
    offer_head: 'New review growth',
    product_used: [
      'Reviews',
      'Listings',
      'Messaging',
      'Webchat',
      'Customer Manager',
    ],
    id: 2,
  },
  {
    img:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62ae22ec3263c7de8393966d_photo-1493666438817-866a91353ca9.webp',
    name: 'Debbie Rose',
    position: 'Owner, Jiva luxury Spa',
    string:
      'Effective text & email marketing campaign on SalesCaptain helped us make additional $150k in two weeks',
    offer: '$150k',
    offer_head: 'Generated with marketing campaign',
    product_used: [
      'Marketing',
      'Webchat',
      'Review',
      'Messaging',
      'Competition & Insights',
    ],
    id: 3,
  },
]

const brandLogo = [
  {
    id: 1,
    url:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cad44fb711e700c0a1_Group%2018530.webp',
  },
  {
    id: 2,
    url:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cae70f01d34820d129_Group%2018531.webp',
  },
  {
    id: 3,
    url:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969c99e10c822b37179e8_Group%2018532.webp',
  },
  {
    id: 4,
    url:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca4e2bcd235bf57982_Group%2018533.webp',
  },
  {
    id: 5,
    url:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca47165b7b29cd5bfa_Group%2018534.webp',
  },
  {
    id: 6,
    url:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cb054ce48a81f23d47_Group%2018535.webp',
  },
]

const productsNameList = [
  {id: 1, name: 'Reviews'},
  {id: 2, name: 'Listings'},
  {id: 3, name: 'Marketing'},
  {id: 4, name: 'WebBoost'},
  {id: 5, name: 'Referrals'},
  {id: 6, name: 'Payments'},
  {id: 7, name: 'Products'},
  {id: 8, name: 'WebChats'},
  {id: 9, name: 'Messaging'},
  {id: 10, name: 'Captain AI'},
  {id: 11, name: 'Feedback & Survey'},
  {id: 12, name: 'Competitions &'},
  {id: 13, name: 'Insights'},
  {id: 14, name: 'Customer Manager'},
]

const industryNameList = [
  {id: 1, name: 'Healthcare'},
  {id: 2, name: 'Dental'},
  {id: 3, name: 'Home Services'},
  {id: 4, name: 'Retail'},
  {id: 5, name: 'Hospitality'},
  {id: 6, name: 'Automotive'},
  {id: 7, name: 'Restaurants'},
  {id: 8, name: 'Wellness'},
  {id: 9, name: 'Professional'},
  {id: 10, name: 'Services'},
]

const partnerNameList = [
  {id: 1, name: 'Become a Partner'},
  {id: 2, name: 'Company'},
  {id: 3, name: 'Contact'},
  {id: 4, name: 'Careers'},
  {id: 5, name: 'Press'},
  {id: 6, name: 'Partners'},
  {id: 7, name: 'Legal'},
]

const Home = () => (
  <>
    <Header />
    <>
      <MainHeadingContainer>
        <MainHeading>Best way to grow your local business</MainHeading>
      </MainHeadingContainer>
      <MainDescriptionContainer>
        <MainDescription>
          Artificial Intelligence powered easy-to-use tools to get more
          customers & give them a better experience
        </MainDescription>
      </MainDescriptionContainer>
      <InputContainer>
        <InputElement name="demo-input" placeholder="ENTER YOUR EMAIL" />
        <GetDemoButton type="button">GET DEMO</GetDemoButton>
      </InputContainer>
      <SiteBackgroundImage
        alt="img"
        src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62b0e6fa4473cb712ba3b454_home-hero-agnostic-l-2x-p-1600.webp"
      />
      <TrustedCompaniesContainer>
        <TrustedCompaniesHeading>
          Trusted by 100,000+ local businesses globally
        </TrustedCompaniesHeading>
      </TrustedCompaniesContainer>
      <TrustedBrandList>
        {brandLogo.map(eachItem => (
          <BrandImage key={eachItem.id} src={eachItem.url} />
        ))}
      </TrustedBrandList>
      <MemberCardContainer>
        {memberCard.map(singleData => (
          <MemberCardSubContainer key={singleData.id}>
            <MemberCardRowOne>
              <LeftContainer>
                <ProfileImage alt="profile-img" src={singleData.img} />
              </LeftContainer>
              <RightContainer>
                <NameContainer>{singleData.name}</NameContainer>
                <PositionContainer>{singleData.position}</PositionContainer>
              </RightContainer>
            </MemberCardRowOne>
            <MemberCardRowTwo>&quot;{singleData.string}&quot;</MemberCardRowTwo>

            <MemberCardRowFour>
              <MemberCardRowThree>{singleData.offer}</MemberCardRowThree>
              <MemberCardRowFourChild>
                {singleData.offer_head}
              </MemberCardRowFourChild>
            </MemberCardRowFour>
            <ProductUsedContainer>
              <MemberCardRowFive>Product used:</MemberCardRowFive>
              <MemberCardRowSix>
                {singleData.product_used.map(data => (
                  <SmallCard>{data}</SmallCard>
                ))}
              </MemberCardRowSix>
            </ProductUsedContainer>
          </MemberCardSubContainer>
        ))}
      </MemberCardContainer>
      <BusinessNxtLevelContainer>
        <BusinessNxtLevelMainHeading>
          Tools to take your business to next level
        </BusinessNxtLevelMainHeading>
      </BusinessNxtLevelContainer>
      <BusinessNxtLevelSubContainer>
        {secondCardsContainer.map(eachItem => (
          <BusinessNxtLevelCard>
            <BusinessNxtLevelHeading>{eachItem.title}</BusinessNxtLevelHeading>
            <BusinessNxtLevelDescription>
              {eachItem.paradata}
            </BusinessNxtLevelDescription>
            <BusinessNxtLevelCardSubCon>
              {eachItem.arrData.map(data => (
                <BusinessNxtLevelCardSecCon>
                  <BusinessCardImage alt="img" src={data.icon} />
                  <BusinessCardSubCon>
                    <BusinessCardSubHeading>
                      {data.title}
                    </BusinessCardSubHeading>
                    <BusinessCardSubDes>{data.description}</BusinessCardSubDes>
                  </BusinessCardSubCon>
                </BusinessNxtLevelCardSecCon>
              ))}
            </BusinessNxtLevelCardSubCon>
          </BusinessNxtLevelCard>
        ))}
      </BusinessNxtLevelSubContainer>
    </>

    <IndustryContainer>
      <IndustryHeading>
        SalesCaptain is designed for your business
      </IndustryHeading>
      <IndustryDescription>
        Select your industry to see how it works
      </IndustryDescription>
      <IndustryList>
        {industryDataList.map(eachItem => (
          <IndustryCard eachItem={eachItem} key={eachItem.id} />
        ))}
      </IndustryList>
    </IndustryContainer>
    <MakeYourBusinessContainer>
      <MakeYourBusinessHeading>
        Make your business stand out with us
      </MakeYourBusinessHeading>
      <MakeYourBusinessSubContainer>
        {makeYourBusinessDataList.map(eachItem => (
          <BusinessCard eachItem={eachItem} key={eachItem.id} />
        ))}
      </MakeYourBusinessSubContainer>
    </MakeYourBusinessContainer>
    <ExpertContainer>
      <ExpertHeading>Expert Insights and Resources</ExpertHeading>
      <ExpertDescription>
        Get the latest business intelligence relevant to your industry, designed
        to help you grow.
      </ExpertDescription>
      <ExpertSubContainer>
        {expertDataList.map(eachItem => (
          <ExpertCard eachItem={eachItem} key={eachItem.id} />
        ))}
      </ExpertSubContainer>
      <ViewAllResourceButton>View All Resources</ViewAllResourceButton>
    </ExpertContainer>
    <ReadyToGrowContainer>
      <ReadyToGrowHeading>Ready to grow?</ReadyToGrowHeading>
      <ReadyToGrowDescription>
        See why 100,000+ businesses trust us. Book a personalized demo to see
        how SalesCaptain provides you the right tools to grow your business.
      </ReadyToGrowDescription>
      <InputContainer>
        <InputElement placeholder="ENTER YOUR EMAIL" />
        <GetDemoButton type="button" className="demo-input-btn">
          GET DEMO
        </GetDemoButton>
      </InputContainer>
      <RattingContainer>
        <RattingImage
          src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af532e37289b6270d7aba8_stars.webp"
          atl="Ratting image"
        />
        <RattingText>500+ Reviews</RattingText>
      </RattingContainer>
      <ImageContainer>
        <GoogleImage
          src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af562b0cd76f4e7026cba9_18-187112_google-transparent-white-logo.webp"
          alt="Google image"
        />
        <CapterraImage
          src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af5631b8d59acd37236ca0_c-dark.webp"
          alt="Capterra image"
        />
        <SoftwareAdviceImage
          src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af562bb61c17fbd3d37043_6033de5cf82f810004782cb7.webp"
          alt="SoftwareAdviceImage"
        />
      </ImageContainer>
    </ReadyToGrowContainer>

    <FooterContainer>
      <FooterSubContainer>
        <FooterAppLogo
          src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d85afd15788d0263af7b58_full_logo_white.webp"
          alt="App Logo"
        />
        <FooterSubContainerOne>
          <ProductsContainer>
            <ProductsHeading>Products</ProductsHeading>
            <ProductsNameCon>
              {productsNameList.map(eachItem => (
                <Para key={eachItem.id}>{eachItem.name}</Para>
              ))}
            </ProductsNameCon>
          </ProductsContainer>
          <FooterIndustryContainer>
            <FooterIndustryHeading>Industry</FooterIndustryHeading>
            {industryNameList.map(eachItem => (
              <Para key={eachItem.id}>{eachItem.name}</Para>
            ))}
          </FooterIndustryContainer>
          <PartnerContainer>
            <PartnerHeading>Partner</PartnerHeading>
            {partnerNameList.map(eachItem => (
              <Para key={eachItem.id}>{eachItem.name}</Para>
            ))}
          </PartnerContainer>
          <AddressContainer>
            <>
              <CountryName>US Headquarters</CountryName>
              <Address>
                <Para>447 Broadway,</Para>
                <Para>2nd Floor,</Para>
                <Para>New York 10013</Para>
              </Address>
            </>
            <>
              <CountryName>India office</CountryName>
              <Address>
                <Para>1467 Janani HSR,</Para>
                <Para>Layout Bengaluru,</Para>
                <Para>Karnataka 560102</Para>
              </Address>
            </>
            <>
              <CountryName>London office</CountryName>
              <Address>
                <Para>79 - 81 Borough Rd,</Para>
                <Para>London England,</Para>
                <Para>400706</Para>
              </Address>
            </>
          </AddressContainer>
        </FooterSubContainerOne>
      </FooterSubContainer>
      <SocialMediaImageContainer>
        <SocialMediaImage src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af585d1036bf0791c31e8b_Group%2017124.svg" />
        <SocialMediaImage src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af585ec5d9c15c1e77be28_Group%2017127.svg" />
        <SocialMediaImage src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af585d612c975d00d3f286_Group%2017130.svg" />
        <SocialMediaImage src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af585e3249a91eabae0c8e_Group%2017132.svg" />
      </SocialMediaImageContainer>
    </FooterContainer>
    <CopyRightsContainer>
      <CopyRightsHeading>
        © SalesCaptain Inc 2023 (A division of SalesBook Technologies Pvt Ltd)
      </CopyRightsHeading>
      <PolicyContainer>
        <PolicyTitle>Terms and conditions</PolicyTitle>
        <PolicyTitle>Privacy</PolicyTitle>
        <PolicyTitle>Refund Policy</PolicyTitle>
        <PolicyTitle>CCPA</PolicyTitle>
      </PolicyContainer>
    </CopyRightsContainer>
  </>
)
export default Home
