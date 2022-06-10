import Dashboard from "./Components/Dashboard";


function App() {
  return (
    <body className="min-h-screen w-full flex">
      <main className="flex-grow">
        <div className="container  mt-48 desktop:ml-355px mobile:ml-30px mobile:mt-96px tablet:ml-44">
          <Dashboard />
        </div>
      </main>
    </body>
  );
}

export default App;
 