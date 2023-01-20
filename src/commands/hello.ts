export function hello(program: any) {
    program
      .command("hello")
      .description("Print Hello!")
      .action(() => printHello());
  }
  
  export async function printHello() {
    console.log("Hello from tanmay");
  }
  