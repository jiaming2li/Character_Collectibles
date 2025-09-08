# Contributing to IP Plush Hub

Thank you for your interest in contributing to IP Plush Hub! We welcome contributions from everyone.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Git

### Setting up the development environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/yourusername/ip-plush-hub.git
   cd ip-plush-hub
   ```
3. Install dependencies:
   ```bash
   # Backend
   cd backend && npm install
   
   # Frontend
   cd ../frontend && npm install
   ```
4. Set up environment variables (see README.md)
5. Start the development servers

## 📋 How to Contribute

### Reporting Bugs
1. Check if the bug has already been reported
2. Create a new issue with:
   - Clear bug description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment details

### Suggesting Features
1. Check existing feature requests
2. Create a new issue with:
   - Clear feature description
   - Use cases and benefits
   - Possible implementation approach

### Code Contributions

#### Branch Naming Convention
- `feature/feature-name` - New features
- `bugfix/bug-description` - Bug fixes
- `hotfix/critical-fix` - Critical fixes
- `docs/documentation-update` - Documentation updates

#### Commit Message Format
```
type(scope): brief description

Detailed description if needed

- List any breaking changes
- Reference issues: Fixes #123
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

#### Pull Request Process

1. **Create a branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**:
   - Write clean, readable code
   - Follow existing code style
   - Add comments for complex logic
   - Update documentation if needed

3. **Test your changes**:
   ```bash
   # Backend tests
   cd backend && npm test
   
   # Frontend tests
   cd frontend && npm test
   ```

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat(auth): add password reset functionality"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**:
   - Use a clear title and description
   - Reference related issues
   - Add screenshots for UI changes
   - Ensure all checks pass

## 🎯 Code Style Guidelines

### JavaScript/React
- Use ES6+ features
- Use functional components with hooks
- Follow existing naming conventions
- Use meaningful variable names
- Keep functions small and focused

### CSS
- Use CSS Modules for component styles
- Follow BEM naming convention
- Use consistent spacing and indentation
- Mobile-first responsive design

### Backend
- Use async/await over promises
- Proper error handling
- Input validation
- Secure coding practices

## 🧪 Testing

### Writing Tests
- Write unit tests for new functions
- Test edge cases and error conditions
- Update tests when modifying existing code

### Running Tests
```bash
# Backend
cd backend && npm test

# Frontend  
cd frontend && npm test

# Run with coverage
npm test -- --coverage
```

## 📚 Documentation

### Code Documentation
- Add JSDoc comments for functions
- Document complex algorithms
- Update README for new features

### API Documentation
- Document new endpoints
- Include request/response examples
- Update Postman collection if available

## 🔍 Code Review Process

### For Contributors
- Respond to feedback promptly
- Make requested changes
- Keep discussions professional

### For Reviewers
- Be constructive and respectful
- Focus on code quality and maintainability
- Suggest improvements, not just problems

## 🏷️ Release Process

1. **Version Bumping**: Follow semantic versioning
2. **Changelog**: Update CHANGELOG.md
3. **Testing**: Ensure all tests pass
4. **Documentation**: Update docs as needed

## 📞 Getting Help

- **Discord**: [Join our community](discord-invite-link)
- **GitHub Discussions**: Ask questions and share ideas
- **Email**: contact@iplushub.com

## 🎉 Recognition

Contributors will be:
- Listed in our README
- Mentioned in release notes
- Invited to our contributors' channel

## 📋 Checklist

Before submitting a PR, ensure:

- [ ] Code follows style guidelines
- [ ] Tests pass locally
- [ ] Documentation is updated
- [ ] Commit messages are clear
- [ ] PR description is complete
- [ ] No merge conflicts
- [ ] Screenshots included (for UI changes)

Thank you for contributing to IP Plush Hub! 🧸✨
