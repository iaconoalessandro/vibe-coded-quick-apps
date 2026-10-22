"""Run the python-path tests against src/solutions/, so every solution on the page is known to pass.

    python tools/check_solutions.py [--exercises-repo ../python-path]

Needs a Python with pytest installed, run from inside a venv (week 0 tests for one).
"""
import argparse
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).parent.parent

ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
ap.add_argument("--exercises-repo", type=Path, default=ROOT.parent / "python-path")
repo = ap.parse_args().exercises_repo

with tempfile.TemporaryDirectory() as tmp:
    tmp = Path(tmp)
    # the tests import `exercises.*` and find data next to tests/, so rebuild that layout
    shutil.copytree(ROOT / "src" / "solutions", tmp / "exercises")
    (tmp / "exercises" / "__init__.py").touch()
    for name in ["tests", "practice_data"]:
        shutil.copytree(repo / name, tmp / name)
    shutil.copy(repo / "pyproject.toml", tmp)
    sys.exit(subprocess.run([sys.executable, "-m", "pytest", "-q"], cwd=tmp).returncode)
