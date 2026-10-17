# Mockups

Static design explorations, one folder per round, named `<yyyy-mm>-<name>` (for example
`2026-11-site`). Each is plain HTML and CSS with real copy, connected to nothing, with a
README saying what it covers, what is sample data and how to open it.

A set is added in the pull request that proposes the change (see
[`../guide/redesign-process.md`](../guide/redesign-process.md)). Once merged it is a record of
what was decided at the time and is not edited to follow later changes; the current rules are
in [`../guide`](../guide) and [`../tokens`](../tokens).

| Set | What it covers |
| --- | --- |
| none yet | |

To view a set, serve its folder and open `index.html`:

```bash
python -m http.server 5178 --directory mockups/<set>
```
