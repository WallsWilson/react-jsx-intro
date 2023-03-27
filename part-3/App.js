function App(){ 
    return (
    <div>
       <Person
       name="Homer"
       age={38}
       hobbies={["bowling", "watching tv", "drinking beer"]}/>
       <Person
       name="Phil"
       age={10}
       hobbies={["chess", "watching tv", "flying"]}/>
       <Person
       name="Time"
       age={38}
       hobbies={["Driving", "camping", "drinking beer"]}/>
    </div>
  );
}