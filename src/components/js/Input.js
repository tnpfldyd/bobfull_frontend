function Input() {
  
  return (
    <input
      onChange={(e) => {
        setPassword2(e.target.value)
      }}
      value={password2}
      type="password"
      placeholder='비밀번호 확인'
      className={styled.input}
      />
  )
}
