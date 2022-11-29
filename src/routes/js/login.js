import {Form} from 'react-bootstrap';

function login() {
  return (
    <>
      <TextControlsExample/>
    </>
  )
}

function FormTextExample() {
  return (
    <>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="비밀번호" 
      />
      <Form.Text id="passwordHelpBlock" muted>
        비밀번호는 반드시 8-20 글자 사이여야 합니다.<br/>
        문자와 숫자로만 이루어져야 합니다.<br/>
        공백이나 특수문자, 이모지등은 불가능합니다.
      </Form.Text>
    </>
  );
}

function TextControlsExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="이메일주소" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <FormTextExample/>
      </Form.Group>
      <button type='submit'>제출</button>
    </Form>
  );
}


export default login;