'use client'

export default function Home() {
  return (    
      <main > 
        <div className="flex h-screen items-center justify-center">
          <section className="w-full h-full flex justify-center items-center bg-primary">
              <img src="logo-field.png" width={"400px"} height={"400px"} />
          </section>
          <section className="w-full h-full flex flex-col justify-center items-center">
              <div className="mb-4 text-center">
                  <h1 className="font-bold text-2xl text-primary">SISTEMA DE GERENCIAMENTO DE PEÇAS</h1>
                  <h2 className="font-bold text-2xl text-highlight">FIELD SERVICE</h2>
              </div>
              <div className="flex flex-col ">
                  <input type="text" placeholder="usuário" className="w-96 rounded-lg bg-white-grey border-none" />
                  <input type="password" placeholder="senha" className="w-96 rounded-lg bg-white-grey border-none mt-2" />
              </div>
              <button type="submit" className="bg-highlight text-white p-3 rounded-lg flex items-center justify-center w-96 mt-6"> Acessar </button>
          </section>
        </div>
      </main>
  );
}
