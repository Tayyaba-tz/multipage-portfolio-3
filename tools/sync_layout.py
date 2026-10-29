#!/usr/bin/env python3
"""Copy partials/header.html and partials/footer.html into every page.

Edit the navbar or footer ONCE in partials/, then run:  python3 tools/sync_layout.py
Pages mark the spots with <!-- SYNC:HEADER:START/END --> and <!-- SYNC:FOOTER:START/END -->.
"""
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent

for name in ("header", "footer"):
    tag = name.upper()
    block = (ROOT / "partials" / f"{name}.html").read_text(encoding="utf-8").strip()
    pattern = re.compile(rf"(<!-- SYNC:{tag}:START -->).*?(<!-- SYNC:{tag}:END -->)", re.S)
    for page in sorted(ROOT.glob("*.html")):
        text = page.read_text(encoding="utf-8")
        new = pattern.sub(lambda m: f"{m.group(1)}\n{block}\n{m.group(2)}", text)
        if new != text:
            page.write_text(new, encoding="utf-8")
            print(f"updated {name} in {page.name}")
print("done")
