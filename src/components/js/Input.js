function Input(props) {
  

  return (
    <input
      onChange={(e) => {
        func(e.target.value)
      }}
      value={password2}
      type="password"
      placeholder='비밀번호 확인'
      className={styled.input}
      />
  )
}
