# cicatriz(1)

```bash
npx cicatriz
```

Prints the manual page of Pedro "Cicatriz" Mello — software engineer, mentor, occasional riff lord — the same content as [cicatriz.dev](https://cicatriz.dev), rendered like `man`.

```
cicatriz [--build <web|mobile|api>] [--consult <team>] [--addon <classic>] [--mentor <dev>]
         [--lang en|pt] [--no-color] [--no-pager] [--contact] [--help] [--version]
```

- Pass a service flag (`npx cicatriz --mentor`) to print just that option and how to get in touch.
- `--lang pt` for Portuguese; defaults to your `LANG`.
- Honors `NO_COLOR`; pages through `less` when the output is taller than the terminal.
