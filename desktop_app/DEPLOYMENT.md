# Desktop App Deployment

## Packaging with PyInstaller

1. Install PyInstaller:
   ```bash
   pip install pyinstaller
   ```
2. Package the app:
   ```bash
   pyinstaller --onefile main.py
   ```
3. The executable will be in the `dist/` directory.

## Notes
- Test the executable on all target platforms (Windows, macOS, Linux).
- Add icons and version info as needed.
