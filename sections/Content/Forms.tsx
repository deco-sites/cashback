export interface Props{
    labelOne: string;
    labelTwo: string;
    labelThree: string
  }
  
  export default function Forms({ labelOne, labelTwo, labelThree}: Props) {
    return (
      <>
        <h1 class="text-center text-2xl font-bold mb-4">Compra do Produto</h1>
        <form>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              {labelOne}
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Digite seu nome"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              {labelTwo}
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              {labelThree}
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Digite sua senha"
            />
          </div>
          <div class="mb-4">
            <input
              class="mr-2 leading-tight"
              type="checkbox"
              id="create-wallet"
              name="create-wallet"
            />
            <label
              class="text-gray-700 text-sm font-bold mb-2"
              for="create-wallet"
            >   
              Você deseja criar uma conta Deco Wallet com os dados de compra?
            </label>
          </div>
          <div class="flex items-center justify-between">
          <a
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              href={"https://dcash-wallet.netlify.app/"}
            >
              Comprar
            </a>
          </div>
        </form>
      </>
    );
  }