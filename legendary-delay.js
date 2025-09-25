/**
 * The Legendary Redirect Delay System
 * A masterpiece of user-hostile design and temporal frustration
 * 
 * This script implements an excruciatingly extended delay before redirecting
 * users to binimum.org, featuring 10+ distinct stages of inconvenience.
 */

class LegendaryDelaySystem {
    constructor() {
        this.currentStage = 0;
        this.totalStages = 10;
        this.stageStartTime = null;
        this.isPaused = false;
        this.tabSwitchCount = 0;
        this.retryClicks = 0;
        this.committeeVotes = 0;
        this.easterEggResets = 0;
        
        // Track if user is focused on tab (for stage 9)
        this.isTabFocused = true;
        
        // Philosophical quotes about waiting
        this.quotes = [
            "\"Time is the most valuable thing we have and we waste it in extraordinary ways.\" - Steve Jobs (but not today!)",
            "\"Patience is not simply the ability to wait - it's how we behave while we're waiting.\" - Joyce Meyer",
            "\"The two most powerful warriors are patience and time.\" - Leo Tolstoy",
            "\"Good things come to those who wait... and wait... and wait...\" - Anonymous",
            "\"In the end, we will remember not the words of our enemies, but the silence of our redirects.\" - MLK (probably)",
            "\"The journey of a thousand miles begins with a single click... and then a very long wait.\" - Lao Tzu (modified)",
            "\"Time you enjoy wasting is not wasted time... right?\" - Bertrand Russell (hopeful)",
            "\"All good things are worth waiting for. Apparently, so are redirects.\" - Ancient Proverb",
            "\"Patience is bitter, but its fruit is sweet. This redirect better be worth it.\" - Aristotle (frustrated)",
            "\"The trouble is, you think you have time... you don't, but you'll spend it here anyway.\" - Buddha (realistic)"
        ];
        
        this.initializeSystem();
    }
    
    initializeSystem() {
        console.log("🐌 Initializing the Legendary Redirect Delay System...");
        console.log("🎯 Target: binimum.org");
        console.log("⏰ Expected completion time: When the heat death of the universe becomes a concern");
        
        // Track tab focus for stage 9
        document.addEventListener('visibilitychange', () => {
            this.isTabFocused = !document.hidden;
            if (!this.isTabFocused) {
                this.tabSwitchCount++;
                console.log(`👀 Tab switch detected! Count: ${this.tabSwitchCount}`);
            }
        });
        
        // Prevent right-click and keyboard shortcuts (for maximum frustration)
        document.addEventListener('contextmenu', e => e.preventDefault());
        document.addEventListener('keydown', e => {
            if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
                e.preventDefault();
                this.showFakeSpeedupTip();
            }
        });
        
        this.startStage(1);
    }
    
    startStage(stageNumber) {
        this.currentStage = stageNumber;
        this.stageStartTime = Date.now();
        this.updateProgressIndicator();
        
        console.log(`🎭 Starting Stage ${stageNumber} of ${this.totalStages}`);
        
        const container = document.getElementById('stage-container');
        container.className = 'fade-in';
        
        switch(stageNumber) {
            case 1: this.stage1_InitializingProtocol(); break;
            case 2: this.stage2_BufferingPatience(); break;
            case 3: this.stage3_ConfirmationModal(); break;
            case 4: this.stage4_ResettingProgress(); break;
            case 5: this.stage5_FakeSystemError(); break;
            case 6: this.stage6_SnailAnimation(); break;
            case 7: this.stage7_CommitteeVoting(); break;
            case 8: this.stage8_QuantumOscillators(); break;
            case 9: this.stage9_CountdownTimer(); break;
            case 10: this.stage10_FeedbackForm(); break;
            default: this.finalRedirect(); break;
        }
    }
    
    stage1_InitializingProtocol() {
        const container = document.getElementById('stage-container');
        container.innerHTML = `
            <div class="stage-title">Initializing Redirect Protocol...</div>
            <div class="stage-message">
                Please wait while we establish a secure connection to the legendary binimum.org portal.
                This process involves complex quantum entanglement procedures.
            </div>
            <div class="stage-progress">
                <div class="stage-progress-fill" id="stage1-progress"></div>
            </div>
            <div class="stage-timer" id="stage1-timer">05:00</div>
            <div class="quote">${this.getRandomQuote()}</div>
        `;
        
        this.addEasterEgg("🚀 Click me for turbo speed!", 10, 20);
        
        let timeLeft = 300; // 5 minutes
        let progress = 0;
        
        const timer = setInterval(() => {
            if (this.currentStage !== 1) {
                clearInterval(timer);
                return;
            }
            
            timeLeft--;
            progress += (Math.random() * 0.5); // Very slow progress
            
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById('stage1-timer').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            document.getElementById('stage1-progress').style.width = `${Math.min(progress, 100)}%`;
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                this.startStage(2);
            }
        }, 1000);
    }
    
    stage2_BufferingPatience() {
        const container = document.getElementById('stage-container');
        container.innerHTML = `
            <div class="stage-title">Buffering Patience...</div>
            <div class="spinner" id="patience-spinner"></div>
            <div class="stage-message" id="buffer-message">
                Loading your capacity for extended waiting periods...
            </div>
            <div class="stage-timer" id="stage2-timer">04:00</div>
            <div class="quote">${this.getRandomQuote()}</div>
        `;
        
        this.addEasterEgg("⚡ Boost loading speed!", 80, 30);
        
        let timeLeft = 240; // 4 minutes
        let freezeCount = 0;
        const messages = [
            "Buffering patience...",
            "Calibrating your waiting tolerance...",
            "Downloading additional patience modules...",
            "Optimizing your frustration threshold...",
            "Synchronizing with global waiting standards...",
            "Installing patience drivers...",
            "Configuring delay preferences..."
        ];
        
        const timer = setInterval(() => {
            if (this.currentStage !== 2) {
                clearInterval(timer);
                return;
            }
            
            timeLeft--;
            
            // Randomly freeze the spinner and show different messages
            if (Math.random() < 0.1) {
                const spinner = document.getElementById('patience-spinner');
                spinner.classList.add('frozen-spinner');
                document.getElementById('buffer-message').textContent = 
                    messages[Math.floor(Math.random() * messages.length)];
                
                setTimeout(() => {
                    if (spinner) {
                        spinner.classList.remove('frozen-spinner');
                    }
                }, 2000);
            }
            
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById('stage2-timer').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                this.startStage(3);
            }
        }, 1000);
    }
    
    stage3_ConfirmationModal() {
        const container = document.getElementById('stage-container');
        container.innerHTML = `
            <div class="stage-title">Confirmation Required</div>
            <div class="stage-message">
                Are you absolutely certain you wish to continue this legendary journey to binimum.org?
                This decision cannot be undone, and the path ahead is fraught with additional delays.
            </div>
            <div class="stage-timer" id="stage3-timer">03:00</div>
            <button class="delay-button" id="yes-button" disabled>Yes, I Commit to the Journey</button>
            <button class="delay-button" id="no-button">No, I Prefer Instant Gratification</button>
            <div class="quote">${this.getRandomQuote()}</div>
        `;
        
        this.addEasterEgg("🔓 Unlock button!", 60, 40);
        
        let timeLeft = 180; // 3 minutes
        
        document.getElementById('no-button').addEventListener('click', () => {
            alert("Wise choice! But you're staying anyway. The journey continues...");
        });
        
        const timer = setInterval(() => {
            if (this.currentStage !== 3) {
                clearInterval(timer);
                return;
            }
            
            timeLeft--;
            
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById('stage3-timer').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (timeLeft <= 0) {
                const yesButton = document.getElementById('yes-button');
                yesButton.disabled = false;
                yesButton.textContent = "Yes, I'm Ready for More Delays!";
                yesButton.addEventListener('click', () => {
                    clearInterval(timer);
                    this.startStage(4);
                });
            }
        }, 1000);
    }
    
    stage4_ResettingProgress() {
        const container = document.getElementById('stage-container');
        container.innerHTML = `
            <div class="stage-title">Progress Loading...</div>
            <div class="stage-message">
                Watch this progress bar carefully. It definitely won't reset randomly.
                We promise. Trust us.
            </div>
            <div class="stage-progress">
                <div class="stage-progress-fill" id="stage4-progress"></div>
            </div>
            <div class="stage-timer" id="stage4-timer">06:00</div>
            <div id="reset-message" style="color: #ff6b6b; margin-top: 20px;"></div>
            <div class="quote">${this.getRandomQuote()}</div>
        `;
        
        this.addEasterEgg("🎲 Reset counter!", 20, 60);
        
        let timeLeft = 360; // 6 minutes
        let progress = 0;
        let resetCount = 0;
        
        const timer = setInterval(() => {
            if (this.currentStage !== 4) {
                clearInterval(timer);
                return;
            }
            
            timeLeft--;
            progress += (Math.random() * 2);
            
            // Random reset when progress gets significant
            if (progress > 30 && Math.random() < 0.15) {
                progress = 0;
                resetCount++;
                document.getElementById('reset-message').textContent = 
                    `Oops! Progress reset #${resetCount}. These things happen! 🤷‍♂️`;
                
                setTimeout(() => {
                    document.getElementById('reset-message').textContent = '';
                }, 3000);
            }
            
            document.getElementById('stage4-progress').style.width = `${Math.min(progress, 100)}%`;
            
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById('stage4-timer').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                this.startStage(5);
            }
        }, 1000);
    }
    
    stage5_FakeSystemError() {
        const container = document.getElementById('stage-container');
        container.innerHTML = `
            <div class="stage-title" style="color: #ff6b6b;">⚠️ SYSTEM ERROR ⚠️</div>
            <div class="stage-message">
                ERROR CODE: 418 - I'm a teapot (and also confused)<br>
                The redirect service has encountered an unexpected error.<br>
                Please click "Retry" to continue. Multiple attempts may be required.
            </div>
            <div class="stage-timer" id="stage5-timer">05:00</div>
            <button class="delay-button" id="retry-button" style="background: #ff6b6b;">
                Retry (${this.retryClicks}/7)
            </button>
            <div id="error-messages" style="margin-top: 20px; color: #ff6b6b;"></div>
            <div class="quote">${this.getRandomQuote()}</div>
        `;
        
        this.addEasterEgg("🔧 Fix error!", 70, 25);
        
        let timeLeft = 300; // 5 minutes
        const retryButton = document.getElementById('retry-button');
        const errorMessages = [
            "Still broken! Try again!",
            "Nope, didn't work that time either.",
            "Third time's NOT the charm apparently.",
            "Have you tried turning it off and on again?",
            "Error Error: Cannot display error message.",
            "System is having an existential crisis.",
            "Almost there! (Just kidding, it's still broken)"
        ];
        
        retryButton.addEventListener('click', () => {
            this.retryClicks++;
            retryButton.textContent = `Retry (${this.retryClicks}/7)`;
            
            if (this.retryClicks < 7) {
                document.getElementById('error-messages').textContent = 
                    errorMessages[this.retryClicks - 1];
            } else {
                document.getElementById('error-messages').innerHTML = 
                    '<div style="color: #72d7b6;">✅ Error resolved! (It was never really broken)</div>';
                retryButton.textContent = "Continue to Next Stage";
                retryButton.style.background = 'linear-gradient(45deg, #72d7b6, #4CAF50)';
                retryButton.onclick = () => {
                    clearInterval(timer);
                    this.startStage(6);
                };
            }
        });
        
        const timer = setInterval(() => {
            if (this.currentStage !== 5) {
                clearInterval(timer);
                return;
            }
            
            timeLeft--;
            
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById('stage5-timer').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (timeLeft <= 0 && this.retryClicks >= 7) {
                clearInterval(timer);
                this.startStage(6);
            }
        }, 1000);
    }
    
    stage6_SnailAnimation() {
        const container = document.getElementById('stage-container');
        container.innerHTML = `
            <div class="stage-title">🐌 Snail-Powered Progress</div>
            <div class="stage-message">
                Our high-speed snail is now carrying your request to binimum.org.
                Please be patient as Gary makes his way across the information superhighway.
            </div>
            <div class="snail-track">
                <div class="snail" id="gary">🐌</div>
            </div>
            <div class="stage-timer" id="stage6-timer">08:00</div>
            <div id="snail-status">Gary is feeling motivated today!</div>
            <div class="quote">${this.getRandomQuote()}</div>
        `;
        
        this.addEasterEgg("🥬 Feed Gary!", 50, 70);
        
        let timeLeft = 480; // 8 minutes
        let snailPosition = -60;
        const statusMessages = [
            "Gary is making steady progress!",
            "Gary stopped for a snack break.",
            "Gary is admiring the scenery.",
            "Gary is questioning his life choices.",
            "Gary found a new friend (another snail).",
            "Gary is having an existential moment.",
            "Gary is almost there! (He's not)",
            "Gary is rethinking the meaning of speed.",
            "Gary wonders why everyone is in such a hurry.",
            "Gary has achieved inner peace."
        ];
        
        const timer = setInterval(() => {
            if (this.currentStage !== 6) {
                clearInterval(timer);
                return;
            }
            
            timeLeft--;
            snailPosition += 0.2; // Very slow progress
            
            // Random status updates
            if (timeLeft % 30 === 0) {
                document.getElementById('snail-status').textContent = 
                    statusMessages[Math.floor(Math.random() * statusMessages.length)];
            }
            
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById('stage6-timer').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                this.startStage(7);
            }
        }, 1000);
    }
    
    stage7_CommitteeVoting() {
        const container = document.getElementById('stage-container');
        container.innerHTML = `
            <div class="stage-title">🗳️ Redirect Committee Session</div>
            <div class="stage-message">
                The International Committee for Redirect Approval is now voting on your request.
                Each member must carefully consider the implications of your redirect.
            </div>
            <div id="committee-members"></div>
            <div class="stage-timer" id="stage7-timer">11:15</div>
            <div id="voting-status">Waiting for committee members to arrive...</div>
            <div class="quote">${this.getRandomQuote()}</div>
        `;
        
        this.addEasterEgg("🗳️ Influence vote!", 30, 50);
        
        // Create 15 committee members
        const committeeContainer = document.getElementById('committee-members');
        for (let i = 0; i < 15; i++) {
            const member = document.createElement('div');
            member.className = 'committee-member';
            member.id = `member-${i}`;
            committeeContainer.appendChild(member);
        }
        
        let timeLeft = 675; // 11 minutes 15 seconds (15 votes × 45 seconds)
        let currentVoter = 0;
        let voteStartTime = Date.now();
        
        const memberNames = [
            "Dr. Procrastination", "Prof. Delay", "Chief Slowdown", "Director Pause",
            "Manager Wait", "Executive Stall", "Supervisor Lag", "Administrator Crawl",
            "Chairman Snail", "President Turtle", "CEO Molasses", "VP Glacial",
            "Secretary Lethargic", "Treasurer Sluggish", "Member Dawdle"
        ];
        
        const timer = setInterval(() => {
            if (this.currentStage !== 7) {
                clearInterval(timer);
                return;
            }
            
            timeLeft--;
            
            // Each vote takes 45 seconds
            if ((Date.now() - voteStartTime) >= 45000 && currentVoter < 15) {
                const member = document.getElementById(`member-${currentVoter}`);
                member.classList.add('voted');
                currentVoter++;
                voteStartTime = Date.now();
                
                document.getElementById('voting-status').textContent = 
                    `${memberNames[Math.min(currentVoter, 14)]} voted YES! (${currentVoter}/15 votes complete)`;
                
                // Animate the voting
                if (currentVoter < 15) {
                    const nextMember = document.getElementById(`member-${currentVoter}`);
                    nextMember.classList.add('voting');
                }
            }
            
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById('stage7-timer').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (timeLeft <= 0 && currentVoter >= 15) {
                document.getElementById('voting-status').textContent = 
                    "🎉 Unanimous approval! Your redirect has been authorized!";
                clearInterval(timer);
                setTimeout(() => this.startStage(8), 2000);
            }
        }, 1000);
    }
    
    stage8_QuantumOscillators() {
        const container = document.getElementById('stage-container');
        container.innerHTML = `
            <div class="stage-title">⚛️ Quantum Redirect Oscillators</div>
            <div class="stage-message">
                Calibrating quantum redirect oscillators for maximum efficiency...<br>
                Synchronizing with interdimensional routing protocols...<br>
                Adjusting temporal displacement parameters...
            </div>
            <div class="stage-progress">
                <div class="stage-progress-fill" id="quantum-progress"></div>
            </div>
            <div class="stage-timer" id="stage8-timer">07:00</div>
            <div id="quantum-status">Initializing quantum field generators...</div>
            <div class="quote">${this.getRandomQuote()}</div>
        `;
        
        this.addEasterEgg("🔬 Quantum boost!", 40, 80);
        
        let timeLeft = 420; // 7 minutes
        let progress = 0;
        const quantumMessages = [
            "Quantum particles are cooperating nicely.",
            "Schrödinger's redirect is both complete and incomplete.",
            "Quantum entanglement with binimum.org established.",
            "Heisenberg uncertainty principle is being uncertain.",
            "Quantum field fluctuations detected.",
            "Parallel universe redirect routes discovered.",
            "Quantum foam is particularly foamy today.",
            "String theory suggests your redirect is actually 11-dimensional.",
            "Quantum tunneling through the internet tubes.",
            "Reality is questioning its own existence."
        ];
        
        const timer = setInterval(() => {
            if (this.currentStage !== 8) {
                clearInterval(timer);
                return;
            }
            
            timeLeft--;
            progress += (Math.random() * 1.5);
            
            // Random quantum status updates
            if (timeLeft % 25 === 0) {
                document.getElementById('quantum-status').textContent = 
                    quantumMessages[Math.floor(Math.random() * quantumMessages.length)];
            }
            
            document.getElementById('quantum-progress').style.width = `${Math.min(progress, 100)}%`;
            
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById('stage8-timer').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                this.startStage(9);
            }
        }, 1000);
    }
    
    stage9_CountdownTimer() {
        const container = document.getElementById('stage-container');
        container.innerHTML = `
            <div class="stage-title">⏰ Final Countdown</div>
            <div class="stage-message">
                You've made it to the final stage! Only 30 minutes remain!<br>
                <strong>WARNING:</strong> Timer pauses when you switch tabs.<br>
                We're watching. 👁️
            </div>
            <div class="stage-timer" id="countdown-display">30:00</div>
            <div id="tab-warning" style="color: #ff6b6b; margin: 20px 0;"></div>
            <div id="tab-switch-count">Tab switches detected: ${this.tabSwitchCount}</div>
            <div class="quote">${this.getRandomQuote()}</div>
        `;
        
        this.addEasterEgg("⏱️ Time warp!", 65, 15);
        
        let timeLeft = 1800; // 30 minutes
        let lastUpdateTime = Date.now();
        
        const timer = setInterval(() => {
            if (this.currentStage !== 9) {
                clearInterval(timer);
                return;
            }
            
            const now = Date.now();
            
            // Only countdown if tab is focused
            if (this.isTabFocused) {
                const elapsed = Math.floor((now - lastUpdateTime) / 1000);
                timeLeft -= elapsed;
                document.getElementById('tab-warning').textContent = '';
            } else {
                document.getElementById('tab-warning').innerHTML = 
                    '⚠️ <strong>TIMER PAUSED</strong> - Please keep this tab active! ⚠️';
            }
            
            lastUpdateTime = now;
            
            document.getElementById('tab-switch-count').textContent = 
                `Tab switches detected: ${this.tabSwitchCount}`;
            
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById('countdown-display').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                this.startStage(10);
            }
        }, 1000);
    }
    
    stage10_FeedbackForm() {
        const container = document.getElementById('stage-container');
        container.innerHTML = `
            <div class="stage-title">📝 Experience Feedback</div>
            <div class="stage-message">
                Congratulations! You've nearly completed the legendary delay experience!<br>
                Please rate your journey before we redirect you to binimum.org.
            </div>
            <div class="feedback-form">
                <textarea id="feedback-text" class="feedback-textarea" 
                         placeholder="Please describe your waiting experience in detail... (minimum 50 characters)"
                         disabled></textarea>
                <div id="feedback-timer">Text input enabled in: <span id="input-countdown">02:00</span></div>
                <button class="delay-button" id="submit-feedback" disabled>Submit Feedback</button>
            </div>
            <div class="quote">${this.getRandomQuote()}</div>
        `;
        
        this.addEasterEgg("✍️ Auto-fill!", 25, 90);
        
        let inputTimeLeft = 120; // 2 minutes until input is enabled
        
        const inputTimer = setInterval(() => {
            if (this.currentStage !== 10) {
                clearInterval(inputTimer);
                return;
            }
            
            inputTimeLeft--;
            
            const minutes = Math.floor(inputTimeLeft / 60);
            const seconds = inputTimeLeft % 60;
            document.getElementById('input-countdown').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (inputTimeLeft <= 0) {
                clearInterval(inputTimer);
                
                const textarea = document.getElementById('feedback-text');
                const submitButton = document.getElementById('submit-feedback');
                
                textarea.disabled = false;
                textarea.focus();
                document.getElementById('feedback-timer').textContent = 
                    "✅ Text input now enabled! Please provide your feedback.";
                
                textarea.addEventListener('input', () => {
                    if (textarea.value.length >= 50) {
                        submitButton.disabled = false;
                        submitButton.textContent = "Submit & Continue to binimum.org";
                        submitButton.addEventListener('click', () => {
                            this.finalRedirect();
                        });
                    } else {
                        submitButton.disabled = true;
                        submitButton.textContent = `Need ${50 - textarea.value.length} more characters`;
                    }
                });
            }
        }, 1000);
    }
    
    finalRedirect() {
        const container = document.getElementById('stage-container');
        container.innerHTML = `
            <div class="stage-title">🎉 Legendary Journey Complete!</div>
            <div class="stage-message">
                Congratulations! You have successfully completed the legendary redirect delay experience!<br>
                You are now being redirected to binimum.org...<br><br>
                <strong>Final Statistics:</strong><br>
                Tab switches: ${this.tabSwitchCount}<br>
                Easter egg resets: ${this.easterEggResets}<br>
                Retry button clicks: ${this.retryClicks}<br>
                Time spent waiting: A legendary amount<br><br>
                You have earned the title: <strong>Master of Patience</strong>
            </div>
            <div class="stage-timer" id="final-timer">05</div>
            <div class="quote">"Your patience has been rewarded... sort of." - The Management</div>
        `;
        
        let countdown = 5;
        const finalTimer = setInterval(() => {
            countdown--;
            document.getElementById('final-timer').textContent = countdown.toString();
            
            if (countdown <= 0) {
                clearInterval(finalTimer);
                // Finally redirect!
                window.location.href = "https://binimum.org/";
            }
        }, 1000);
    }
    
    updateProgressIndicator() {
        document.getElementById('current-stage').textContent = this.currentStage;
        document.getElementById('total-stages').textContent = this.totalStages;
        const progressPercentage = (this.currentStage - 1) / this.totalStages * 100;
        document.getElementById('overall-progress-fill').style.width = `${progressPercentage}%`;
    }
    
    getRandomQuote() {
        return this.quotes[Math.floor(Math.random() * this.quotes.length)];
    }
    
    addEasterEgg(text, leftPercent, topPercent) {
        const easterEgg = document.createElement('div');
        easterEgg.className = 'easter-egg';
        easterEgg.textContent = text;
        easterEgg.style.left = `${leftPercent}%`;
        easterEgg.style.top = `${topPercent}%`;
        
        easterEgg.addEventListener('click', () => {
            this.easterEggResets++;
            alert(`🎉 Easter Egg Found!\n\nCongrats! You found a secret button!\nHowever, as promised, this resets your delay timer.\n\nEaster egg resets: ${this.easterEggResets}\n\nRestarting from Stage 1... 😈`);
            this.startStage(1);
        });
        
        document.getElementById('stage-container').appendChild(easterEgg);
    }
    
    showFakeSpeedupTip() {
        alert("💡 Pro Tip: Try pressing F5 repeatedly to turbocharge the redirect!\n\n(Just kidding, this does absolutely nothing. Nice try though! 😄)");
    }
}

// Initialize the legendary delay system when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new LegendaryDelaySystem();
});

// Console ASCII art for the developers who peek
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣤⣤⣤⣤⣤⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⡿⠟⠛⠉⠉⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠻⢿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⣠⣴⣶⣿⣿⣿⣿⣿⣿⣿⣶⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀⠀⣼⣿⠟⠋⠉⠀⠀⠀⠀⠀⠉⠙⠻⣿⣧⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⢸⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡇⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⡆⠀⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⠀⠀⠀⠀⠀⢰⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⢸⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠈⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠃⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⡆⠹⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⠟⠀⠀⠀⠀⢰⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡄⠙⢿⣷⣄⡀⠀⠀⠀⠀⢀⣠⣿⠋⠀⠀⠀⠀⢠⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣄⠀⠉⠛⠿⠿⠿⠿⠿⠛⠉⠀⠀⠀⠀⢀⣴⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣷⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣶⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⣿⣿⣷⣶⣤⣤⣤⣤⣶⣾⣿⣿⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠿⠿⠿⠿⠛⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

🐌 THE LEGENDARY REDIRECT DELAY SYSTEM 🐌
Congratulations! You've found the developer console!
Unfortunately, even knowing the secrets won't help you skip the wait.
Enjoy your journey through the 10 stages of redirect enlightenment!
`);