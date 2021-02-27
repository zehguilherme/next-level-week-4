/**
 * Sempre que o usuário acessa uma página diferente, o arquivo é reaproveitado porém recalculado
 * Gera um processamento a mais na aplicação
 */

/** Context API
 * - Provider: todos os elementos dentro dele vão ter acesso aos dados (armazenados) daquele determinado contexto
 * - value: qual informação será enviada nesse contexto específico
 */

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
