import '../../components/css/Main.css';
function Test() {
  setTimeout("location.href='http://localhost:3000/main'", 4900);
  return (
    <div className="div">
      <div className='overlay'></div>
      <img className='main_image' src='/main.jpg' id="scrollDiv" />
      <h2 className='text'>같이 밥먹어요!</h2>
    </div>
  );

}
export default Test;
