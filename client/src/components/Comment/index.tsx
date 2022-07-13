import {
  Container,
  Header,
  Main,
  Footer,
  FeedbackContainer,
  Button,
  ReplyingTo,
  ButtonsContainer,
} from './styles';

import PlusSVG from '../../assets/icon-plus.svg';
import MinusSVG from '../../assets/icon-minus.svg';
import ReplySVG from '../../assets/icon-reply.svg';
import DeleteSVG from '../../assets/icon-delete.svg';
import EditSVG from '../../assets/icon-edit.svg';

export function Comment() {
  return (
    <Container>
      <Header>
        <img src="https://github.com/diego3g.png" alt="diego3g avatar" />

        <p>
          diego3g

          {/* <span>you</span> */}
        </p>

        <span>1 month ago</span>
      </Header>

      <Main>
        {/* <ReplyingTo>@Diounata </ReplyingTo> */}

        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quaerat numquam autem
        suscipit quis! Tenetur at, fugit perspiciatis iusto porro veritatis. Quia debitis nam harum
        recusandae aspernatur perspiciatis aliquam commodi.
      </Main>

      <Footer>
        <FeedbackContainer>
          <button>
            <img src={PlusSVG} alt="Like" title="Like" />
          </button>

          <p>12</p>

          <button>
            <img src={MinusSVG} alt="Dislike" title="Dislike" />
          </button>
        </FeedbackContainer>

        <ButtonsContainer>
          <Button color="BLUE">
            <img src={ReplySVG} alt="Reply" title="Reply" /> Reply
          </Button>

          {/* <Button color="RED">
            <img src={DeleteSVG} alt="Delete" title="Delete" /> Delete
          </Button>

          <Button color="BLUE">
            <img src={EditSVG} alt="Edit" title="Edit" /> Edit
          </Button> */}
        </ButtonsContainer>
      </Footer>
    </Container>
  );
}
